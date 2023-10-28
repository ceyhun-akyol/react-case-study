class Formatter {
  bet(item) {
    return {
      year: item.C,
      name: item.N,
      type: item.TYPE,
      id: item.NID,
      date: item.D,
      time: item.T,
      day: item.DAY,
      //   S: "Open",
      league: item.LN,
      // IMF: false,
      ocg: item.OCG,
      // HEC: false,
    };
  }
}

export default new Formatter();
