import { useCallback } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import firestore from 'firestore';

const useAddProjet = () =>
  useCallback(() => addDoc(collection(firestore, 'projects'), {}), []);

export default useAddProjet;
