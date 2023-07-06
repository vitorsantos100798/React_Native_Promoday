type TypeFeedData = {
  id: string;
  nameSupermarketing: string;
  price: string;
  nameProduct: string;
  imagePromotion?: string | undefined;
  iconSupermarketing?: string | undefined;
}[];
export const FeedData: TypeFeedData = [
  {
    id: '1',
    nameSupermarketing: 'Supermercado Estrela',
    price: '7.39',
    nameProduct: ' Fardo de Refrigerante',
    iconSupermarketing:
      'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/295038792_468405435285672_3123334345081014194_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XQssfwnYt-0AX89hkzo&_nc_ht=scontent-gru1-1.xx&oh=00_AfChRDPpf06O5_6-Wli6xWnx97_0FTUC1WcKNsYpJAPaYQ&oe=646BF813',
    imagePromotion:
      'https://vejasp.abril.com.br/wp-content/uploads/2016/11/23755_extra005.jpeg?quality=70&strip=info&w=1280&h=720&crop=1',
  },
  {
    id: '2',
    nameSupermarketing: 'Supermercado Conal',
    price: '12.99',
    nameProduct: 'Arroz Anceli',
    iconSupermarketing:
      'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/303521404_516343340492319_7540057701410799332_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ik1EsV_RLdUAX_bUYnk&_nc_ht=scontent-gru1-1.xx&oh=00_AfCKOwRN27jmR-iWJy99FYde9H9FFSnlM2Nc9-thvfwFow&oe=646D19F3',
    imagePromotion:
      'https://www.solito.com.br/site/wp-content/uploads/2017/06/mockup_site_arroz-anceli-650x938.png',
  },
  {
    id: '3',
    nameSupermarketing: 'Regentão Supermercado',
    price: '8.99',
    nameProduct: 'Papel Higiênico',
    imagePromotion:
      'https://diariodocomercio.com.br/wp-content/uploads/2018/10/supermercado.jpg',
    iconSupermarketing:
      'https://lh5.googleusercontent.com/p/AF1QipP8zPbhO6Ek-hWP-fYXdz8nFebYUm3jY1ZwpUUF=w169-h250-k-no',
  },
  {
    id: '5',
    nameSupermarketing: 'Supermercado Tavin',
    price: '9.90',
    nameProduct: 'Açucar Alto Alegre',
    imagePromotion:
      'http://www.blogdosupermercado.com.br/wp-content/uploads/2017/10/supermercado-ofertas.jpg',
    iconSupermarketing:
      'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2011%2f08%2f18%2f08%2fWDL-Logo-6598_9026_040951059_875058798.jpg',
  },
];
