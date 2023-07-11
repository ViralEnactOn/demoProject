/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function ChildComponent(props) {
  return (
    <>
      <div>
        <button onClick={() => props.firstComponentParent("child")}>
          ChildComponent
        </button>
      </div>
    </>
  );
}

export default ChildComponent;
