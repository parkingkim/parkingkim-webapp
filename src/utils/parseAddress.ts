interface AddressInfo {
  legalDong: string;
  city_do: string;
  gu_gun: string;
  eup_myun: string;
  roadName: string;
  buildingIndex: string;
  buildingName: string;
  ri: string;
  bunji: string;
}

export interface AddressResult {
  roadAddr: string;
  jibunAddr: string;
}

export default function parseAddress(response: { addressInfo: AddressInfo }): AddressResult {
  const { legalDong, city_do, gu_gun, eup_myun, roadName, buildingIndex, buildingName, ri, bunji } =
    response.addressInfo;

  const lastLegalChar = legalDong.charAt(legalDong.length - 1);
  let roadAddr = `${city_do} ${gu_gun} `;

  if (eup_myun === '' && (lastLegalChar === '읍' || lastLegalChar === '면')) {
    roadAddr += legalDong;
  } else {
    roadAddr += eup_myun;
  }

  roadAddr += ` ${roadName} ${buildingIndex}`;

  if (legalDong !== '' && lastLegalChar !== '읍' && lastLegalChar !== '면') {
    roadAddr += buildingName ? ` (${legalDong}, ${buildingName})` : ` (${legalDong})`;
  } else if (buildingName !== '') {
    roadAddr += ` (${buildingName})`;
  }

  const jibunAddr =
    `${city_do} ${gu_gun} ${legalDong} ${ri} ${bunji}` + (buildingName ? ` ${buildingName}` : '');

  return {
    roadAddr,
    jibunAddr,
  };
}
