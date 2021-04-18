import json


class Coordinates:
    def get_all_coordinates():
        with open("server/data/coordinates.json", encoding='utf-8') as f:
            return json.load(f)
