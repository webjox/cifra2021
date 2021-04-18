from server.data.vacancy import VacancyData
specialties = [
                "Прикладная математика и информатика",
               "Фундаментальная информатика и информационные технологии",
               "Информационные системы и технологии",
               "Прикладная информатика",
               "Программная инженерия",
               "Информационная безопасность",
               "Бизнес-информатика"
               ]
spec_vac = [""]
class Analyzer:
    def alanyze():
        vacancy = VacancyData.get_vacancy()
        for vac in vacancy:
            spl_vac = vac["vacancy"].split(" ")
            #for o in spec_vac:
            if "C#" in spl_vac:

                print(specialties[0])
            #print(spl_vac)
        #print(vacancy)
