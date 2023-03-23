export class NormalizeData {
  static formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static searchData(arr) {
    return arr.map(
      ({
        abstract,
        headline,
        pub_date,
        uri,
        multimedia,
        section_name,
        web_url,
      }) => {
        let imgUrl = '';
        if (multimedia.length !== 0) {
          imgUrl = `https://www.nytimes.com/${multimedia[0].url}`;
        } else {
          imgUrl =
            'https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif';
        }

        return {
          title: headline.print_headline
            ? headline.print_headline
            : headline.main,
          text: abstract,
          date: this.formatDate(pub_date),
          img: imgUrl,
          category: section_name,
          id: uri,
          url: web_url,
        };
      }
    );
  }

  static popularData(arr) {
    return arr.map(
      ({ abstract, title, published_date, uri, media, section, url }) => {
        let imgUrl = '';
        if (media.length !== 0) {
          imgUrl = media[0]['media-metadata'][2].url;
        } else {
          imgUrl =
            'https://media.tenor.com/_3uPSgb8o5gAAAAC/ukraine-ukraine-flag.gif';
        }

        return {
          title: title,
          text: abstract,
          date: this.formatDate(published_date),
          img: imgUrl,
          category: section,
          id: uri,
          url: url,
        };
      }
    );
    s;
  }
}
