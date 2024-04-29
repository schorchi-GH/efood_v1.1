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
import Food from '../../models/Food'

export type Props = {
  foodModal: Food
}

const ModalFood = ({ foodModal }: Props) => {
  return (
    <>
      <Modal>
        <ModalContent>
          <FoodImage src={foodModal.foodPhoto} alt={foodModal.foodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{foodModal.foodTitle}</FoodTitle>
            <FoodDescription>
              {foodModal.foodDescription}
              <p>Serve: {foodModal.foodServe}</p>
            </FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ {foodModal.foodPrice}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon src={close} alt="Icone de fechar" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default ModalFood
