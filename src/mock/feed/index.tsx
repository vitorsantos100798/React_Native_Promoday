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
      'https://img.freepik.com/vetores-premium/logotipo-do-supermercado_23-2148459011.jpg?w=740',
    imagePromotion:
      'https://vejasp.abril.com.br/wp-content/uploads/2016/11/23755_extra005.jpeg?quality=70&strip=info&w=1280&h=720&crop=1',
  },
  {
    id: '2',
    nameSupermarketing: '24 Supermercado',
    price: '12.99',
    nameProduct: 'Cerveja',
    iconSupermarketing:
      'https://img.freepik.com/vetores-gratis/design-com-carrinho-para-logotipo-de-supermercado_23-2148464351.jpg?w=740&t=st=1680351177~exp=1680351777~hmac=99e89de355127ed2ff3a4345c94573345adb01116f5d4361335785f3fdaddfe0',
    imagePromotion:
      'https://sgsistemas.com.br/wp-content/uploads/2020/03/Blog_SG_Sistemas__8.jpg',
  },
  {
    id: '3',
    nameSupermarketing: 'Supermercado Estrela',
    price: '8.99',
    nameProduct: 'Arroz',
    imagePromotion:
      'https://diariodocomercio.com.br/wp-content/uploads/2018/10/supermercado.jpg',
    iconSupermarketing:
      'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/271814661_2902583459997041_8655658504887847101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xALWdqStPbMAX_ZK0ng&_nc_ht=scontent-gru2-2.xx&oh=00_AfCO1yXJIQ22wEgYJ9PO9adJ1ipt2aZpw7XQdFL9E4L0ng&oe=642DF4C8',
  },
  {
    id: '4',
    nameSupermarketing: 'União Supermercado',
    price: '9.99',
    nameProduct: 'Feijão',
    imagePromotion:
      'https://sgsistemas.com.br/wp-content/uploads/2020/03/Blog_SG_Sistemas__9.jpg',
    iconSupermarketing:
      'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/258824538_1017735978958716_9219089866339523527_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h_YbggG1HfMAX9eyL2v&_nc_ht=scontent-gru1-1.xx&oh=00_AfDIBvGZnzrraoJrepKC-749Tq2xP8XFfb0hfHfR6DcuCg&oe=642DF491',
  },
  {
    id: '5',
    nameSupermarketing: 'Supermercado Tavin',
    price: '9.90',
    nameProduct: 'Açucar',
    imagePromotion:
      'http://www.blogdosupermercado.com.br/wp-content/uploads/2017/10/supermercado-ofertas.jpg',
    iconSupermarketing:
      'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2011%2f08%2f18%2f08%2fWDL-Logo-6598_9026_040951059_875058798.jpg',
  },
];
