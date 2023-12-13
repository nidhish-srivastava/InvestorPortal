import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountCreated from '../assets/AccountSuccess.png'
function AccountSuccessModal() {
    const router = useRouter()
return (
    <div className="bg-white flex max-w-[360px] flex-col items-stretch pl-10 pr-16 py-12">
      <Image
      src={AccountCreated}
      width={100}
      height={100}
      alt=""
        className="aspect-[0.98] object-contain object-center w-full overflow-hidden mt-20"
        />
      <div className="text-black text-2xl self-center whitespace-nowrap mt-10 mb-56">
        Account created successfully
      </div>
      <button onClick={()=>router.push("/")}>Home</button>
    </div>
  );
}
export default AccountSuccessModal
