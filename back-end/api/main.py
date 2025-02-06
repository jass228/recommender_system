"""
@author:
Description:
"""
import os
import pickle
import pandas as pd
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

base_path_data = os.path.join("data")

model_path = os.path.join("model", "movieRecommenderModel.pkl")
data_path = os.path.join(base_path_data, "data.pkl")
dataset_path = os.path.join(base_path_data, "finalDataset.csv")
movies_path = os.path.join(base_path_data, "movies.csv")

model = pickle.load(open(model_path, 'rb'))
data = pickle.load(open(data_path, "rb"))
dataset = pd.read_csv(dataset_path)
movies = pd.read_csv(movies_path)

def getMovie(movieTitle, numberOfMovie):
    """_summary_

    Args:
        movieTitle (_type_): _description_
        numberOfMovie (_type_): _description_

    Returns:
        _type_: _description_
    """
    movieList = movies[movies['title'].str.contains(movieTitle.lower())]
    if len(movieList):
        movieId = movieList.iloc[0]['movieId']
        movieId = dataset[dataset['movieId'] == movieId].index[0]
        distances, indices = model.kneighbors(data[movieId], n_neighbors=numberOfMovie+1)
        rec_movie_indices = sorted(list(zip(indices.squeeze().tolist(),distances.squeeze().tolist())),key=lambda x: x[1])[:0:-1]
        recommend_frame = []
        for val in rec_movie_indices:
            movieId = dataset.iloc[val[0]]['movieId']
            idx = movies[movies['movieId'] == movieId].index
            word = movies.iloc[idx]['title'].values[0]
            ID = word.find('(')
            title = word[:ID]
            year = word[word.find('(')+1:word.find(')')]
            if title[-6:] == ', the ':
                title = 'the ' + title[:-6]
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
def read_root(prompt: str, num: int):
    """_summary_

    Args:
        prompt (str): _description_
        num (int): _description_

    Returns:
        _type_: _description_
    """
    result = getMovie(prompt, num)
    return JSONResponse(content=result, media_type="application/json")
