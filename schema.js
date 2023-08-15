const Schema = {
    "class": 'Person',
    "vectorizer": "img2vec-neural",
    "vectorIndexType": "hnsw",

    "moduleConfig": {
        "img2vec-neural": {
            "imageFields": [
                "image"
            ]
        }
    },

    "properties": [
        {
            "name": "image",
            "dataType": ['blob'],
        },
        {
            "name": "text",
            "dataType": ['string'],
        }
    ]
}

export default Schema;