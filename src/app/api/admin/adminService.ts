import { Admin, Querie } from './admin'

export class AdminService {

  constructor(private querie:Querie) {
    this.querie = querie
  }

  async create(admin:Admin){
    this.querie.insert(admin)
  }
}