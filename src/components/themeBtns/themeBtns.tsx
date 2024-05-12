import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setDarkTheme, setLightTheme } from "../../store/theme/action"
import { selectTheme } from "../../store/theme/selectors"
import './themeBtns.css'

export const ThemeBtns = () => {

    const { theme } = useSelector(selectTheme)

    const dispatch = useDispatch()

    const toggleDarkMode = () => {
        if (theme === 'dark') {
            dispatch(setLightTheme())
        } else {
            dispatch(setDarkTheme())
        }
    }
    return (
        <div className={theme === 'dark' ? 'themeBtns' : 'themeBtns themeBtnsLight'}>
            <img className='iconTheme' src='https://cdn-icons-png.freepik.com/256/4307/4307319.png?ga=GA1.1.474256826.1688119391&semt=ais_hybrid' />
            <label className='switch'>
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} />
                <span className='slider'></span>
            </label>
            <img className='iconTheme' src='https://cdn-icons-png.freepik.com/256/3120/3120499.png?ga=GA1.1.474256826.1688119391&semt=ais_hybrid' />
        </div>
    )
}