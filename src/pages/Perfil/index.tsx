import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import FoodModel from '../../models/Food'
import pizza from '../../assets/pizza.png'
import ModalFood from '../../components/ModalFood'
import Food from '../../models/Food'

const foods: FoodModel[] = [
  {
    id: 1,
    foodTitle: 'Pizza Marquerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: 'de 2 a 3 pessoas',
    foodPrice: 60.9
  },
  {
    id: 2,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '',
    foodPrice: 0
  },
  {
    id: 3,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '',
    foodPrice: 0
  },
  {
    id: 4,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '',
    foodPrice: 0
  },
  {
    id: 5,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '',
    foodPrice: 0
  },
  {
    id: 6,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '',
    foodPrice: 0
  }
]

const foodSelected: Food = {
  id: 1,
  foodTitle: 'Pizza Marquerita',
  foodDescription:
    'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
  foodPhoto: pizza,
  foodPhotoAlt: 'Pizza marguerita',
  foodServe: 'de 2 a 3 pessoas',
  foodPrice: 60.9
}

const Perfil = () => (
  <>
    <Header itens={0} />
    <Apresentacao />
    <FoodList foods={foods} />
    <ModalFood foodModal={foodSelected} />
    <Footer />
  </>
)

export default Perfil
