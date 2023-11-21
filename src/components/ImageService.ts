import axios from "axios";
import {randomIntFromInterval} from '../utils';

async function ImageService() {
  const res = await axios({
    method: "get",
    url: `https://picsum.photos/v2/list?page=${randomIntFromInterval(1,99)}&limit=${randomIntFromInterval(1,10)}`,
  });

  return res.data;
}

export default ImageService;
