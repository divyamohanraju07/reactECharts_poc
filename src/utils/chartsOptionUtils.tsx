
export const lineChartOption: any = {
  xAxis: {
    type: "category",
    data: ["A", "B", "C"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150],
      type: "line",
    },
  ],
};

export const pieChartOption: any = {
  title: {
    text: "Referer of a Website",
    subtext: "Survey Data",
    left: "left",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    left: "right",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "80%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowOffsetX: 5,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

const data: number[] = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}

export const barRaceChartOption : any = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 4 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
  
}


export const barRaceChart:any = {
 
}