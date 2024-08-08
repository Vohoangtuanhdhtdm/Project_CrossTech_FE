interface CartItemProps {
  imageLogo: string;
  imageIcon1: string;
  imageIcon2: string;
  imgaeHeart: string;
  imageIconHand: string;
  content: {
    title: string;
    description: string;
  };
}

export const CartItem: React.FC<CartItemProps> = ({
  imageLogo,
  imageIcon1,
  imageIcon2,
  imgaeHeart,
  imageIconHand,
  content,
}) => {
  return (
    <div className="w-[320px] h-[276px] border border-yellow-600 rounded-3xl flex flex-col justify-evenly space-x-4">
      <div className="relative right-0 top-0 flex items-center justify-evenly ">
        <img
          className="absolute left-4 w-[62px] h-[60px]"
          src={imageLogo}
          alt="Cart item"
        />
        <div className="absolute w-[150px] h-[90px] right-0 rounded-3xl ">
          <img
            className="absolute right-1 bottom-0 w-[45px] h-[37px] "
            src={imageIcon1}
            alt=""
          />
          <img
            className="absolute w-[64px] h-[65px] left-4 top-1"
            src={imageIcon2}
            alt=""
          />
          <img
            className="absolute rounded-3xl w-[82px] h-[64px] right-0 top-1 "
            src={imageIconHand}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[24px] font-bold">{content.title}</p>
        <p className="text-[14px] font-bold">{content.description}</p>
      </div>
      <div className="flex items-center space-x-[16px]">
        <button className="w-[100px] h-[40px] bg-[#F5EEEC] rounded-3xl flex items-center space-x-2 justify-center">
          <span className="w-[22px] h-[16px]">+20</span>
          <img className="mt-2 w-[15px] h-[20px]" src={imgaeHeart} alt="" />
        </button>
        <button className="w-[143px] h-[40px] border border-[#CDD5DF] rounded-3xl text-gray-400">
          Follow
        </button>
      </div>
    </div>
  );
};
