import pickle
import pandas as pd
from fastapi import FastAPI, Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

model = pickle.load(open('movieRecommenderModel.pkl', 'rb'))
csr_data = pickle.load(open("csr_data.pkl", "rb"))
dataset = pd.read_csv('finalDataset.csv')
movies = pd.read_csv('movies.csv')

def getMovie(movieTitle, numberOfMovie):
    movieList = movies[movies['title'].str.contains(movieTitle)]
    if len(movieList):
        movieId = movieList.iloc[0]['movieId']
        movieId = dataset[dataset['movieId'] == movieId].index[0]
        distances, indices = model.kneighbors(csr_data[movieId], n_neighbors=numberOfMovie+1)
        rec_movie_indices = sorted(list(zip(indices.squeeze().tolist(),distances.squeeze().tolist())),key=lambda x: x[1])[:0:-1]
        recommend_frame = []
        for val in rec_movie_indices:
            movieId = dataset.iloc[val[0]]['movieId']
            idx = movies[movies['movieId'] == movieId].index
            word = movies.iloc[idx]['title'].values[0]
            ID = word.find('(')
            title = word[:ID]
            year = word[word.find('(')+1:word.find(')')]
            if title[-6:] == ', The ':
                title = 'The ' + title[:-6]
            recommend_frame.append({'id': int(idx.values[0]),'title':title,'distance':val[1], 'year': year})
        return recommend_frame
    else:
        return "No movies found. Please check your input"

app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_credentials=True, 
    allow_origins=["*"], 
    allow_methods=["*"], 
    allow_headers=["*"]
)

@app.get("/")
async def generate(prompt: str, num: int):
    result = getMovie(prompt, num)
    return JSONResponse(content=result, media_type="application/json")
