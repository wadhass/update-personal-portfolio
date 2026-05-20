import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ahmedhassansumu@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+250734332198" Image={FiPhone} />
      <SingleInfo text="Rwanda Kerehe Mahama" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
