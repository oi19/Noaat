import {Platform, PermissionsAndroid} from "react-native";

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const getValueFromId = (id?: string | number, list?: any[]) => {
  if (list) {
    const element = list?.find((element: any) => element.id === id);
    return `${element ? element.name : ""}`;
  }
};

export const convertObjToFormData = (obj: any): FormData => {
  let data = new FormData();
  for (let key in obj) {
    if (obj[key]) {
      data.append(key, obj[key]);
    }
  }
  return data;
};

export const formateImage = (image?: any) => {
  let photo;

  if (image) {
    photo = {
      name: image?.split("/")[image?.split("/").length - 1],
      type: "image/jpeg",
      uri: isIos ? image?.replace("file://", "") : image,
    };
  }
  return photo;
};

export const combineErrorMessages = (errors: {[key: string]: string[]}) => {
  let combinedMessage = "";
  Object.keys(errors).forEach(field => {
    combinedMessage += `${errors[field].join("\n")}\n `;
  });
  return combinedMessage.trim();
};

export function convertArrayToObject(daysArray: any[]): Record<number, any> {
  return daysArray.reduce((acc, day) => {
    acc[day.day_index] = {...day};
    return acc;
  }, {} as Record<number, any>); // Explicitly define the index type
}

export const areObjectsEqual = (obj1: any, obj2: any): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export function handlePagination<T>(
  oldList: Array<T>,
  newList: Array<T>,
  current_page: number,
  reset?: boolean,
) {
  if (current_page === 1 || reset) {
    return newList;
  } else {
    return oldList.concat(newList);
  }
}

export async function requestStoragePermission() {
  try {
    const writeGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This App needs access to your device storage",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );

    const readGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This App needs access to your device storage",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );

    if (
      writeGranted === PermissionsAndroid.RESULTS.GRANTED &&
      readGranted === PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Storage permission granted");
    } else {
      console.log("Storage permission denied");
    }
  } catch (error) {
    console.warn(error);
  }
}
