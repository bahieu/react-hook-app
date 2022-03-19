import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`
      );

      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        data = data.reverse();
      }
      setDataCovid(data);
    };
    getData();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => (
            <tr key={item.ID}>
              <td>{item.Date}</td>
              <td>{item.Confirmed}</td>
              <td>{item.Active}</td>
              <td>{item.Deaths}</td>
              <td>{item.Recovered}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Covid;
