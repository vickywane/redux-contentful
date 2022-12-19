const {
  REACT_APP_CONTENTFUL_CDA_ENDPOINT,
  REACT_APP_CONTENTFUL_SPACE_ID,
  REACT_APP_CONTENTFUL_CDA_TOKEN,
} = process.env;

if (
  !REACT_APP_CONTENTFUL_CDA_ENDPOINT ||
  !REACT_APP_CONTENTFUL_SPACE_ID ||
  !REACT_APP_CONTENTFUL_CDA_TOKEN
) {
    new Error('Contentful credentials missing!')
}

export class ContentfulClient {
  BASE_URL = `${REACT_APP_CONTENTFUL_CDA_ENDPOINT}/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}/environments/master`;
  contentType = "";

  constructor(type) {
    this.contentType = type;
  }

  async makeRequest(url) {
    try {
      const req = await fetch(
        `${this.BASE_URL}/${url}&access_token=${REACT_APP_CONTENTFUL_CDA_TOKEN}`
      );
      const response = await req.json();

      return response;
    } catch (e) {
      console.log(`Fetch Err: ${e}`);
    }
  }

  async getItems(searchText) {
    let url = `/entries?content_type=${this.contentType}`;

    if (searchText) {
      url += `&query=${searchText}`;
    }

    const { items } = await this.makeRequest(url);

    return items;
  }

  async getAsset(id) {
    const url = `assets/${id}?content_type=${this.contentType}`;

    const { fields } = await this.makeRequest(url);

    return fields;
  }
}
