import { api } from '../instance';

export const getIntro = async () => await api.get<Api.IntroResponse>('/intro');
