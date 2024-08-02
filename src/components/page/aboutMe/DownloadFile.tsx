'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

const cvUrl =
  'https://www.canva.com/design/DAFMSFck3zE/KP9iOms_Z_ynIhkYHxlKZw/view?utm_content=DAFMSFck3zE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink';

const DownloadFile = () => {
  const t = useTranslations();

  const handleDownLoadFile = async (fileUrl: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Tran_Phi_Anh_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw error;
    }
  };

  return (
    <button
      className="btn btn-linear d-sm-inline-block hover-up hover-shadow"
      onClick={() => handleDownLoadFile(cvUrl)}>
      {t('page.aboutMe.experience.download')}
    </button>
  );
};

export default DownloadFile;
