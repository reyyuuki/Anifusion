import { useEffect, useState } from "react";
import "../css/infoElement.css";

const InfoElement = ({ data }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const getMonthName = (monthNumber) => {
      const months = [
        "Invalid month number",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[monthNumber] || "N/A";
    };

    const startMonth = getMonthName(data.startDate.month);
    const endMonth = getMonthName(data.endDate.month);

    const EndDay = data.endDate.day;
    const EndYear = data.endDate.year;
    setEndDate(`${EndDay} ${endMonth}, ${EndYear}`);

    const Startday = data.startDate.day;
    const Startyear = data.startDate.year;
    setStartDate(`${Startday} ${startMonth}, ${Startyear}`);
  }, []);

  return (
    <div className="InfoContainer">
      <div className="InfoTable">
        <div className="InfoRow">
          <div className="InfoTitle">Mean Score</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>

          <div className="InfoValue">{data.rating / 10 || "N/A"}/10</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Status</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.status || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">TotalEpisodes</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.totalEpisodes || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Average Duration</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.duration}/min</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Format</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.type || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Studio</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.studios || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Popularity</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.popularity || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Season</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{data.season || "N/A"}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">Start</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{startDate}</div>
        </div>
        <div className="InfoRow">
          <div className="InfoTitle">End</div>
          <div className="Icon">
            <ion-icon
              name="ellipsis-horizontal-outline"
              className="Icon"
            ></ion-icon>
          </div>
          <div className="InfoValue">{endDate}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoElement;
