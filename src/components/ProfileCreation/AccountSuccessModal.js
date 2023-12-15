import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountCreated from '../../assets/AccountSuccess.png'
function AccountSuccessModal() {
    const router = useRouter()
return (
    <div className="flex flex-col items-center mt-12">
      <Image
      src={AccountCreated}
      width={400}
      height={400}
      alt=""
        />
      <h3 className="text-black text-2xl self-center whitespace-nowrap mt-10 mb-4">
        Account created successfully
      </h3>
      <button className="btn" onClick={()=>router.push("/")}>Home</button>
    </div>
  );
}
export default AccountSuccessModal
