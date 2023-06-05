import { getItem, setItem } from "../storage";
import { Data, StorageHandlerInterface } from "../../../interfaces";

const KEY = "StorageHandlerAdapter";

class StorageHandlerAdapter implements StorageHandlerInterface {
  get = () => {
    try {
      return Promise.resolve(JSON.parse(getItem(KEY)) as Data);
    } catch (e) {
      return Promise.resolve();
    }
  };

  set = (data: Data): Promise<void> => {
    setItem(KEY, JSON.stringify(data));
    return Promise.resolve();
  };
}

export const storageHandlerAdapter = new StorageHandlerAdapter();
