import React, { createContext, useState, useContext } from 'react';
import { AuthConstants } from './constants/auth.constants';
import LoginService from './services/login.service';
import StorageService from './services/storage.service';

interface IAuthContext {
    logged: boolean;
    userName: string;
    pageName: string;
    loadingVisibility: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
    setActualPageName(pageNamed: string): void;
    setLoadVisibilityGlobal(loadingVisibility: boolean): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<any> = ({ children }) => {

    const [userName, setuserName] = useState<string>('');
    const [pageName, setPageName] = useState<string>('');
    const [loadingVisibility, setLoadingVisibility] = useState<boolean>(false);

    const [logged, setLogged] = useState<boolean>(() => {
        setPageName(AuthConstants.PLATFORMVERSION)
        const isLogged = localStorage.getItem(AuthConstants.MINHACARTEIRALOGGED);
        return !!isLogged;
    });


    const signIn = async (email: string, password: string) => {
        const logg: any = await LoginService.login(email, password)

        if (logg.statusCode == undefined) {
            StorageService.saveStorage(AuthConstants.MINHACARTEIRALOGGED, 'true');
            StorageService.saveStorage(AuthConstants.MINHACARTEIRALOGGEDTOKEN, JSON.stringify(logg));
            setLogged(true);
            setuserName(email)
            setPageName('Contas do Ano')
        } else {
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem(AuthConstants.MINHACARTEIRALOGGED);
        clearAll()
    }

    const setActualPageName = (pageNamed: string) => {
        setPageName(pageNamed)
    }

    const clearAll = () => {
        setLogged(false);
        setuserName('')
        setPageName(AuthConstants.PLATFORMVERSION)
    }

    const setLoadVisibilityGlobal = (visibility: boolean) => {
        setLoadingVisibility(visibility)
    }

    return (
        <AuthContext.Provider value={
            {
                logged,
                userName,
                pageName,
                loadingVisibility,
                signIn,
                signOut,
                setActualPageName,
                setLoadVisibilityGlobal
            }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };