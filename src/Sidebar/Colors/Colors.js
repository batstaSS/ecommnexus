import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="orange"
          title="Orange"
          name="test1"
          color="orange"
        />

        <Input
          handleChange={handleChange}
          value="silver"
          title="Silver"
          name="test1"
          color="silver"
        />

        <Input
          handleChange={handleChange}
          value="brown"
          title="Brown"
          name="test1"
          color="brown"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
}

export default Colors;
