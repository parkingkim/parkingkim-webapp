import { useEffect, useRef } from 'react';

let isMount = false;
const Map = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /** 지도가 2번 생성되지 않기 위한 로직입니다.
     * ex. React.StrictMode
     */
    if (isMount) return;

    isMount = true;
    new window.Tmapv3.Map(ref.current, {
      center: new window.Tmapv3.LatLng(37.566481622437934, 126.98502302169841),
      width: '100%',
      height: '600px',
      zoom: 18,
    });
  }, []);

  return <div ref={ref} />;
};

export default Map;
