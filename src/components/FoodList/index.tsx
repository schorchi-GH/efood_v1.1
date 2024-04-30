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
import { AddCartButton } from '../Food/styles'
import close from '../../assets/close 1.png'
import { useState } from 'react'

export type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
  return (
    <>
      <Container>
        <List>
          {foods.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setfoodTitle(food.foodTitle)
                setfoodDescription(food.foodDescription)
                setfoodServe(food.foodServe)
                setfoodPrice(food.foodPrice)
                setfoodPhotoAlt(food.foodPhotoAlt)
                setfoodPhoto(food.foodPhoto)
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
            src={close}
            alt="Icone de fechar"
          />
        </ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default FoodList
