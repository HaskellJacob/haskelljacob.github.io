import React from 'react';
import {
  Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption,
  CarouselControl, CarouselIndicators, CarouselItem,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import './PortfolioPage.css'

import imgPortfolioFastFileExplorer from '../assets/img/portfolio/fast_file_explorer.png';
import imgPortfolioCoreTS from '../assets/img/portfolio/core-ts.png';
import imgPortfolioYCombinator from '../assets/img/portfolio/ycombinator.png';
import imgPortfolioRDParse from '../assets/img/portfolio/rd-parse.png';
import imgPortfolioTree from '../assets/img/portfolio/tree-visualize.gif';
import imgPortfolioTree23 from '../assets/img/portfolio/tree23.png';
import imgPortfolioSolidity from '../assets/img/portfolio/solidity.png';
import imgPortfolioUniswap from '../assets/img/portfolio/uniswap.png';

class PortfolioPage extends React.Component {
    render() {
        return (
            <div className="PortfolioPage">
                <Card>
                    <CardImg top width="100%" 
                        src="https://github.com/HaskellJacob/RenderingEngineOpenGL-cpp/raw/master/Screenshots/RenderingEngineDemo.gif" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Rendering engine written in C++ and OpenGL</CardTitle>
                        <a href="https://github.com/HaskellJacob/RenderingEngineOpenGL-cpp" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://github.com/HaskellJacob/CCKIT_STL-cpp/raw/master/Screenshots/Metaprogramming.png" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>My implementation of C++ Standard Template Library</CardTitle>
                        <a href="https://github.com/HaskellJacob/CCKIT_STL-cpp" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://github.com/HaskellJacob/CCKIT_STL-cpp/raw/master/Screenshots/MazeGen.PNG" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Maze generation on terminal</CardTitle>
                        <a href="https://github.com/HaskellJacob/CCKIT_STL-cpp/blob/master/src/CCKIT/experimental/maze_gen.h" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioCoreTS}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Typescript library of algorithms and Haskell abstraction</CardTitle>
                        <a href="https://github.com/HaskellJacob/core-ts" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioYCombinator}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Typesafe trampoline implemented with Y combinator paradigm that supports 
                            continuation-passing style and enables tail recursion without stack overflow in Typescript
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/ethereum-monorepo-ts/blob/master/packages/core-ts-remastered/src/Y/impl.ts" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioRDParse}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Typescript recursive descent parser implemented with flexible
                            components used to define complex grammar with ease
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/ethereum-monorepo-ts/blob/master/packages/rd-parse-ts/src-0/TextParser/Grammar/JsonGrammar.ts" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioTree}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Visualization of AVL tree implemented with generic solution applicable
                            to all N-ary trees like radix tree
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/ethereum-monorepo-ts/blob/master/packages/core-ts-remastered/test/src/data-structure/AVLTree/benchmark-async.ts" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioTree23}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>Haskell-style Javascript implementation of 2-3 tree with heavy recursion</CardTitle>
                        <a href="https://github.com/HaskellJacobCurry/haskell-js/blob/master/src/haskell/Data/Tree23/index.js" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioSolidity}
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Upgradeable delegate proxy smart contract implemented in Solidity and deployed
                            to Ethereum for outsourcing clients
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/zeroex-delegateproxy-solidity/tree/master/contracts/zeroex-token" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                        <a href="https://etherscan.io/token/0x8d26cca0d58913932157dd4b294d4c95066172df#code" rel="noopener noreferrer" target="_blank" >
                            <Button>Etherscan</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src="https://jacob-trading-bot.netlify.app/images/trading-bot-1.PNG"
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Trading bot / market-making program implemented for outsourcing clients
                        </CardTitle>
                        <a href="https://jacob-trading-bot.netlify.app/guidance/" rel="noopener noreferrer" target="_blank" >
                            <Button>Demo</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioUniswap} 
                        alt="The image is currently unavailable" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Ethereum Uniswap dApp for swapping tokens and providing liquidity to Uniswap pools
                            (Metamask required)
                        </CardTitle>
                        <a href="https://jacobtheprogrammerchan.github.io/" rel="noopener noreferrer" target="_blank" >
                            <Button>dApp</Button>
                        </a>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" 
                        src={imgPortfolioFastFileExplorer} 
                        alt="The image is currently unavailable" />
                    <CardBody className="CardBody">
                        <CardTitle>Android App: File Explorer</CardTitle>
                        <a href="https://github.com/HaskellJacob/FastFileExplorer-android" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
				<Card>
                    <CardImg top width="100%" 
                        src="https://github.com/HaskellJacob/ProcGenAI-unity/blob/master/Screenshots/ProcGenAIDemo.gif?raw=true" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            Procedurally generated world where autonomous agents navigate via
                            A* pathfinding algorithm and behavior tree algorithm (Unity C#)
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/ProcGenAI-unity" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
				<Card>
                    <CardImg top width="100%" 
                        src="https://github.com/HaskellJacob/Buildcraft-unity/blob/master/Screenshots/BuildcraftDemo.gif?raw=true" 
                        alt="The image is currently unavailable because Github is down" />
                    <CardBody className="CardBody">
                        <CardTitle>
                            A game where the player builds creative constructs with load and save functions (Unity C#)
                        </CardTitle>
                        <a href="https://github.com/HaskellJacob/Buildcraft-unity" rel="noopener noreferrer" target="_blank" >
                            <Button>Source code</Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PortfolioPage;