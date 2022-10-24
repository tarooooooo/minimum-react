import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const { showMessage } = useMessage();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    // task: 一旦fake_dataを利用。後ほどgraphql経由でバックエンドのデータを利用するように修正
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if(res.data) {
        showMessage({title: "ログインしました", status: "success"});
        navigate('home');
      } else {
        showMessage({title: "ユーザーが見つかりません", status: "error"});
      }
    })
    .catch(() => showMessage({title: "ログインできません", status: "error"}))
    .finally(() => setLoading(false));
  }, 
  [navigate]
  );
  return { login, loading }
};