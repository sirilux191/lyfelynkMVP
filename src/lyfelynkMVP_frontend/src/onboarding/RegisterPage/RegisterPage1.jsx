import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Connect2ic: Import Connect2ic library to interact with the backend canister
import { useCanister } from "@connect2ic/react";
//
import { useState } from "react";

export default function RegisterPage1Content() {
  // Connect2ic: Use the "lyfelynkMVP_backend" canister

  const [lyfelynkMVP_backend] = useCanister("lyfelynkMVP_backend");
  //

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [height, setHeight] = useState("");
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState("");
  const [state, setState] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [pincode, setPincode] = useState("");

  const registerUser = async () => {
    const demoInfo = {
      name,
      dob,
      gender,
      country,
      state,
      pincode,
    };

    const basicHealthPara = {
      bloodType,
      height,
      heartRate,
      weight,
    };
    // Convert demoInfo and basicHealthPara objects to JSON strings
    const demoInfoJson = JSON.stringify(demoInfo);
    const basicHealthParaJson = JSON.stringify(basicHealthPara);

    // Convert JSON strings to Uint8Array
    const demoInfoArray = new TextEncoder().encode(demoInfoJson);
    const basicHealthParaArray = new TextEncoder().encode(basicHealthParaJson);

    const result = await lyfelynkMVP_backend.createUser(
      Object.values(demoInfoArray),
      Object.values(basicHealthParaArray),
      [],
      []
    );
    Object.keys(result).forEach((key) => {
      if (key == "err") {
        alert(result[key]);
      }
      if (key == "ok") {
        alert("Your Health User ID is :", result[key]);
        navigate("verify");
      }
    });
  };
  return (
    <section className="px-6 flex justify-center items-center h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <div className="flex flex-col lg:flex-row md:w-4/6">
        <div className="flex-1 flex flex-col justify-center text-white p-4">
          <div className="flex items-center mb-4">
            <img
              alt="Logo"
              className="h-6 w-6 md:h-10 md:w-10"
              src="/assets/LyfeLynk.png"
            />
            <h1 className="text-2xl md:text-4xl font-bold ml-2">Lyfelynk</h1>
          </div>
          <p className="text-xl md:text-2xl">Digitally Linking your health.</p>
        </div>

        <div className="flex-1 items-center max-w-xl bg-background rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Register User</h2>
            <Link to="/Register">
              <ChevronLeft />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <div className="mt-1">
                <Input
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <div className="mt-1">
                <Input
                  placeholder="Date Of Birth"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="mt-1">
                <Select
                  value={gender}
                  onValueChange={(value) => setGender(value)}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="blood_type"
              >
                Blood Type
              </label>
              <div className="mt-1">
                <Select
                  value={bloodType}
                  onValueChange={(value) => setBloodType(value)}
                >
                  <SelectTrigger id="blood_type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="height"
              >
                Height
              </label>
              <div className="mt-1">
                <Input
                  id="height"
                  placeholder="Height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="country"
              >
                Country
              </label>
              <div className="mt-1">
                <Input
                  id="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="weight"
              >
                Weight
              </label>
              <div className="mt-1">
                <Input
                  id="weight"
                  placeholder="Weight in Kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="state"
              >
                State
              </label>
              <div className="mt-1">
                <Input
                  id="state"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="weight"
              >
                Heart Rate
              </label>
              <div className="mt-1">
                <Input
                  id="weight"
                  placeholder="Heart Rate"
                  value={heartRate}
                  onChange={(e) => setHeartRate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="pincode"
              >
                Pincode
              </label>
              <div className="mt-1">
                <Input
                  id="pincode"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <Button
            className="w-full"
            onClick={registerUser}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}