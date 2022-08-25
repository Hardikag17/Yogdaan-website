import { useState, useContext } from 'react';
import { create } from 'ipfs-http-client';
import { YogdaanContext } from '../../utils/YogdaanContext';
import Image from 'next/image';
import axios from 'axios';

export default function AddToForum() {
  const [fileUrl, setFileUrl] = useState();
  const { state } = useContext(YogdaanContext);

  const client = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

  const [formInput, updateFormInput] = useState<ForumMetadata>({
    shgid: '',
    title: '',
    description: '',
    imgUri: '',
    location: '',
  });
  async function onChange(e: any) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url: any = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log(url);
      setFileUrl(url);
    } catch (e) {
      console.log(e);
    }
  }

  const createForum = async () => {
    console.log('button clicked');
    console.log(state.account);
    const { shgid, title, description, imgUri, location } = formInput;
    if (!shgid || !title || !description || !fileUrl || !location) return;
    const data = JSON.stringify({
      shgid,
      title,
      description,
      imgUri: fileUrl,
      location,
    });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // after file is uploaded to IPFS, pass the URL to save it on Polygon
      addService(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  async function addService(url: string) {
    try {
      await axios
        .post('/api/mongoose', {
          shgid: formInput.shgid,
          title: formInput.title,
          description: formInput.description,
          imgUri: formInput.imgUri,
          location: formInput.location,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      alert(
        'Congrats!! we have successfully added your service to our platform'
      );
    } catch (error) {
      console.log('error:', error);
    }
  }
  return (
    <div className=' w-5/6'>
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          Title
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) =>
            updateFormInput({ ...formInput, title: e.target.value })
          }
          placeholder='Eg: alex'
        />
      </div>
      <br />
      <div className='bg-white flex flex-col items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-full h-12 flex items-center justify-center'>
          {' '}
          Description
        </label>
        <textarea
          rows={5}
          onChange={(e) =>
            updateFormInput({ ...formInput, description: e.target.value })
          }
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          placeholder='Eg: alex'
        />
      </div>
      <br />
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          location
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) =>
            updateFormInput({ ...formInput, location: e.target.value })
          }
          placeholder='Eg: alex'
        />
      </div>
      <br />
      <div>
        <div>
          <input
            type='file'
            name='Asset'
            className='my-4'
            onChange={onChange}
          />
          {fileUrl && (
            <Image
              alt='Ipfs upload image'
              className='rounded mt-4'
              width='350'
              height='200'
              src={fileUrl}
            />
          )}
        </div>
      </div>
      <div className=' py-10 flex justify-center'>
        <button
          onClick={createForum}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-3 p-3 text-white font-semibold lg:text-2xl text-xl text-center'>
          Post
        </button>
      </div>
    </div>
  );
}
