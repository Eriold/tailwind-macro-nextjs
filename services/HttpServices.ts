import { environment } from "../env/enviroment"

const HttpService = () => {
  return {
    get: async () => {

    },
    post: async (payload: object, path: string) => {
      const res = fetch(environment.skydropx.url + path, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: environment.skydropx.headers
      });
      return (await res).json()
    }
  }
}

export default HttpService;