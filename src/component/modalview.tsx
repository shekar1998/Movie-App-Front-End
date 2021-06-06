import { Modal, Button } from 'antd';
import { useState } from 'react';

function App(){

    const [modal1Visible1,setModal1] = useState(false);
    const [modal1Visible2,setModal2] = useState(false);

    return (
      <>
        <Button type="primary" onClick={() => setModal1(false)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={modal1Visible1}
          onOk={() =>  setModal1(false)
          }
          onCancel={() =>setModal1(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br />
        <br />
        <Button type="primary" onClick={() => setModal2(false)}>
          Vertically centered modal
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={modal1Visible2}
          onOk={() =>  setModal2(false)}
          onCancel={() =>  setModal2(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
    );
}

export default App;