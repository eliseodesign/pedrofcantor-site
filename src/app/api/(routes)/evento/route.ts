import { ResponseProvider } from '../../handlers'

export async function GET(req: Request) {
  return ResponseProvider(200, 'evento endpoint', null)
}