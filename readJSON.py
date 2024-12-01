import json

# Load the JSON file
with open("books.json", "r") as file:
    data = json.load(file)

# (a) Print the title of the first book
print("Title of the first book:", data["books"][0]["title"])

# (b) Print the author of the second book
print("Author of the second book:", data["books"][1]["author"])

# (c) Print all genres
all_genres = [genre for book in data["books"] for genre in book["genres"]]
print("Genres of all books:", ", ".join(all_genres))
