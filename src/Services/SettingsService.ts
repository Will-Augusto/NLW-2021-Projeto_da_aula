import {getCustomRepository, Repository} from "typeorm"
import { Setting } from "../entities/Setting";
import {SettingsRepository} from "../Repositories/SettingsRepository";



interface IsettingsCreate {
    chat: boolean
    username: string
}

class SettingsService {
    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create( {chat, username} : IsettingsCreate ){
    

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })
        
        if (userAlreadyExists){
            throw new Error("User Already exists!")
        }
        const settings = this.settingsRepository.create({
            chat,
            username
        })
    
        await this.settingsRepository.save(settings)

        return settings

    }

    async findByUsername(username: string){
        const settings = await this.settingsRepository.findOne({
            username
        })
    }
}

export {SettingsService}