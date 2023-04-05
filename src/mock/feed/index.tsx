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
      'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/271814661_2902583459997041_8655658504887847101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xALWdqStPbMAX_ZK0ng&_nc_ht=scontent-gru2-2.xx&oh=00_AfCO1yXJIQ22wEgYJ9PO9adJ1ipt2aZpw7XQdFL9E4L0ng&oe=642DF4C8',
    imagePromotion:
      'https://vejasp.abril.com.br/wp-content/uploads/2016/11/23755_extra005.jpeg?quality=70&strip=info&w=1280&h=720&crop=1',
  },
  {
    id: '2',
    nameSupermarketing: 'Supermercado Conal',
    price: '12.99',
    nameProduct: 'Arroz Anceli',
    iconSupermarketing:
      'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/303521404_516343340492319_7540057701410799332_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuBsFmBq6HEAX9BH-u7&_nc_ht=scontent-gru1-1.xx&oh=00_AfA4n9ybfbNHHgWWBBvHYFioFh0vcKAOJclZyWRra_ZW7A&oe=6431C673',
    imagePromotion:
      'https://sgsistemas.com.br/wp-content/uploads/2020/03/Blog_SG_Sistemas__8.jpg',
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
    id: '4',
    nameSupermarketing: 'Estrela Confort',
    price: '9.99',
    nameProduct: 'Feijão',
    imagePromotion:
      'https://sgsistemas.com.br/wp-content/uploads/2020/03/Blog_SG_Sistemas__9.jpg',
    iconSupermarketing:
      'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/271814661_2902583459997041_8655658504887847101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xALWdqStPbMAX_ZK0ng&_nc_ht=scontent-gru2-2.xx&oh=00_AfCO1yXJIQ22wEgYJ9PO9adJ1ipt2aZpw7XQdFL9E4L0ng&oe=642DF4C8',
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
