import { Admin, Querie } from './admin'

export class AdminService {

  constructor(private querie:Querie) {
    this.querie = querie
  }

  async create(admin:Admin){
    console.log("SERVICE", admin)
    this.querie.insert(admin)
  }

  async delete(id: number) {
    const result = await this.querie.selectOne(id)

    if(result){
      this.querie.delete(id)
      return true;
    }
    return false;
  }
  
  async getAll(){
    const result = await this.querie.selectAll()
    return result
  }
}