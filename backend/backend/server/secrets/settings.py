import pymysql
import json
from json_settings import Settings


class DatabaseSetting(Settings):
    @Settings.assign
    def __init__(self, values: dict):
        self.host = str
        self.dbname = str
        self.username = str
        self.password = str



class AllSettings(Settings):
    @Settings.assign
    def __init__(self, value: dict):
        self.database = DatabaseSetting

    @classmethod
    def get_connection_database(cls):

        with open("server/secrets/settings.json", 'r') as f:
            values = json.loads(f.read())
        my_cool_setting = AllSettings(values)

        connection = pymysql.connect(host=my_cool_setting.database.host,
                                     user=my_cool_setting.database.username,
                                     password=my_cool_setting.database.password,
                                     database=my_cool_setting.database.dbname, )

        return connection

#AllSettings.get_connection_database()
'''
        with connection:
            cur = connection.cursor()
            cur.execute("SELECT VERSION()")

            version = cur.fetchone()

            print("Database version: {}".format(version[0]))
'''