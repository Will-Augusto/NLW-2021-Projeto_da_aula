import { EntityRepository, Repository } from "typeorm";

import { Connection } from "../entities/Connection"

@EntityRepository(Connection)
class ConnectionsReporitory extends Repository<Connection>{
    
}

export {ConnectionsReporitory}