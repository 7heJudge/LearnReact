import cls from './Music.module.css';

export const Music = () => {
    const Temp = (props) => {
      return (
        <div className={cls.temp}>
            <div>Name: {props.name}</div>
            <div>Likes: {props.likeCounts}</div>
            <div>Time: {props.time}</div>
        </div>
      );
    };
    let musicsData = [
        {name: 'VaDick', likeCounts: 412, time: '10:56'},
        {name: 'Yan', likeCounts: 1, time: '10:14'},
        {name: 'Kura', likeCounts: 2, time: '02:56'},
        {name: 'Misha', likeCounts: 6, time: '11:42'},
    ];
    let musicsElements = musicsData.map(el => (<Temp name={el.name} likeCounts={el.likeCounts} time={el.time}/>));
    return (
        <div>
            Music
            {musicsElements}
        </div>
    );
};