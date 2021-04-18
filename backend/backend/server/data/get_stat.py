from server.data.resume import ResumeData
from server.data.city import CityData
from server.data.vacancy import VacancyData
from server.data.get_coord import Coordinates

class Statistic:
    def get_statistic():
        statistics = dict()
        all_statistics = list()
        coordinates = Coordinates.get_all_coordinates()

        vacancy = VacancyData.get_uniq_vacancy()
        city = CityData.get_city()
        resume = ResumeData.get_uniq_resume()
        vac_keys = list(vacancy.keys())
        vac_vals = list(vacancy.values())

        res_keys = list(resume.keys())
        res_vals = list(resume.values())

        coor_keys = list(coordinates.keys())
        coor_vals = list(coordinates.values())

        for vac in vac_keys:
            for c in city:
                if int(vac) == int(c["hh_id"]):
                    indx_vac = vac_keys.index(vac)
                    statistics["id"] = vac
                    statistics["name"] = c["name"]
                    statistics["vacancy"] = vac_vals[indx_vac]
                    for res in res_keys:
                        if int(res) == int(vac):
                            indx_res = res_keys.index(res)
                            statistics["summary"] = res_vals[indx_res]

                            for coor in coor_keys:
                                if coor == statistics["name"]:
                                    indx_coord = coor_keys.index(coor)
                                    statistics["coord"] = coor_vals[indx_coord]
                                    temp = statistics.copy()
                                    all_statistics.append(temp)
        return all_statistics
