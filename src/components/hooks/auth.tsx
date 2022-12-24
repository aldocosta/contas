import React, { createContext, useState, useContext } from 'react';
import { AuthConstants } from './constants/auth.constants';
import LoginService from './services/login.service';
import StorageService from './services/storage.service';

interface IAuthContext {
    logged: boolean;
    userName: string;
    pageName: string;
    signIn(email: string, password: string): void;
    signOut(): void;
    setActualPageName(pageNamed: string): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<any> = ({ children }) => {

    const [userName, setuserName] = useState<string>('');
    const [pageName, setPageName] = useState<string>('');

    const [logged, setLogged] = useState<boolean>(() => {
        setPageName(AuthConstants.PLATFORMVERSION)
        const isLogged = localStorage.getItem(AuthConstants.MINHACARTEIRALOGGED);
        return !!isLogged;
    });


    const signIn = async (email: string, password: string) => {        
        const logg = await LoginService.login(email, password)

        if (logg.statusCode == undefined) {
            StorageService.saveStorage(AuthConstants.MINHACARTEIRALOGGED, 'true');            
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

    return (
        <AuthContext.Provider value={{ logged, userName, pageName, signIn, signOut ,setActualPageName}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };