/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Modal, Upload as BaseUpload } from 'antd';

import { getBase64 } from 'utils/helpers';

const Upload = ({ attachments, removeAttachment }) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    fileList: attachments,
  });

  useEffect(() => {
    setState({
      ...state,
      fileList: attachments,
    });
  }, [attachments]);

  const handleCancel = () => setState({ ...state, previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  const handleChange = ({ fileList }) =>
    setState({
      ...state,
      fileList,
    });

  return (
    <div className="clearfix">
      <BaseUpload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={file => removeAttachment(file)}
      />
      <Modal
        visible={state.previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
      </Modal>
    </div>
  );
};

Upload.defaultProps = {
  attachments: [],
};

export default Upload;
