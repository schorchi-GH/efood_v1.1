import FoodModel from '../../models/Food'
import {
  List,
  Container,
  CloseIcon,
  ModalContent,
  FoodDescription,
  FoodImage,
  FoodTitle,
  Modal,
  ModalContainer
} from './styles'
import Food from '../../components/Food'
<<<<<<< HEAD
import { AddCartButton } from '../Food/styles'
import close from '../../assets/close 1.png'
import { useState } from 'react'
=======
import pizza from '../../assets/pizza.png'
import { useState } from 'react'
import { AddCartButton } from '../Food/styles'
import close from '../../assets/close 1.png'
import {
  Modal,
  ModalContent,
  FoodImage,
  FoodTitle,
  FoodDescription,
  ModalContainer,
  CloseIcon
} from './styles'
>>>>>>> 205520026d05101d006cda9d1fa40e7a83331c3b

export type Props = {
  foods: FoodModel[]
}

<<<<<<< HEAD
const FoodList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
=======
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
    foodTitle: 'Pizza quatro queijos',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '5 pessoas',
    foodPrice: 0
  },
  {
    id: 3,
    foodTitle: 'Pizza peperoni',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    foodServe: '1 pessoa',
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

const FoodList = () => {
  const [showModal, setShowModal] = useState(false)

  const [modalFoodTitle, setFoodTitle] = useState('')
  const [modalFoodDescription, setFoodDescription] = useState('')
  const [modalFoodPhoto, setFoodPhoto] = useState('')
  const [modalFoodPhotoAlt, setFoodPhotoAlt] = useState('')
  const [modalFoodServe, setFoodServe] = useState('')
  const [modalFoodPrice, setFoodPrice] = useState(0)

>>>>>>> 205520026d05101d006cda9d1fa40e7a83331c3b
  return (
    <>
      <Container>
        <List>
          {foods.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
<<<<<<< HEAD
                setfoodTitle(food.foodTitle)
                setfoodDescription(food.foodDescription)
                setfoodServe(food.foodServe)
                setfoodPrice(food.foodPrice)
                setfoodPhotoAlt(food.foodPhotoAlt)
                setfoodPhoto(food.foodPhoto)
=======
                setFoodTitle(food.foodTitle)
                setFoodDescription(food.foodDescription)
                setFoodPhoto(food.foodPhoto)
                setFoodPhotoAlt(food.foodPhotoAlt)
                setFoodServe(food.foodServe)
                setFoodPrice(food.foodPrice)
>>>>>>> 205520026d05101d006cda9d1fa40e7a83331c3b
              }}
            >
              <Food
                key={food.id}
                FoodPhoto={food.foodPhoto}
                FoodTitle={food.foodTitle}
                FoodDescription={food.foodDescription}
                FoodPhotoAlt={food.foodPhotoAlt}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={showModal ? 'visible' : ''}>
        <ModalContent>
<<<<<<< HEAD
          <FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{foodTitle}</FoodTitle>
            <FoodDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ {foodPrice}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon
            onClick={() => setShowModal(false)}
=======
          <FoodImage src={modalFoodPhoto} alt={modalFoodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{modalFoodTitle}</FoodTitle>
            <FoodDescription>
              {modalFoodDescription}
              <p>Serve: {modalFoodServe}</p>
            </FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ {modalFoodPrice}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon
            onClick={() => {
              setShowModal(false)
            }}
>>>>>>> 205520026d05101d006cda9d1fa40e7a83331c3b
            src={close}
            alt="Icone de fechar"
          />
        </ModalContent>
<<<<<<< HEAD
        <div onClick={() => setShowModal(false)} className="overlay"></div>
=======
        <div
          onClick={() => {
            setShowModal(false)
          }}
          className="overlay"
        ></div>
>>>>>>> 205520026d05101d006cda9d1fa40e7a83331c3b
      </Modal>
    </>
  )
}

export default FoodList
