import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import style from '../assets/css/style.css'; 
import App from '../App'; 

const  MainComp = () => {
  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectValue, setSecondSelectValue] = useState('');
  const navigate = useNavigate();
  
  // Options for the first select
  const firstSelectOptions = ['Nexon' ,'Celerio', 'Thar', 'i20', 'Octivia' , 'Carens'];

  // Options for the second select based on the value of the first select
  const secondSelectOptions = {
    'Nexon': ['Tiago', 'Tigor' , 'Punch','Altroz'],
    'Celerio': ['Ertiga', 'Dzire','EECO'],
    'Thar': ['Bolero', 'XUV700', 'TUV300'],
    'i20': ['Creta', 'Venue', 'Verna' ],
    'Octivia': ['Kodiaq', 'Slavia' , 'Kushaq'],
    'Carens': ['Seltos', 'Carnival','EV6'],
  };

  const NCapRating = {
    'Nexon': ['Tiago', 'Tigor' , 'Punch','Altroz'],
    'Celerio': ['Ertiga', 'Dzire','EECO'],
    'Thar': ['Bolero', 'XUV700', 'TUV300'],
    'i20': ['Creta', 'Venue', 'Verna' ],
    'Octivia': ['Kodiaq', 'Slavia' , 'Kushaq'],
    'Carens': ['Seltos', 'Carnival','EV6'],
  }
  const handleFirstSelectChange = (event) => {
    setFirstSelectValue(event.target.value);
    // Reset second select when first select changes
    setSecondSelectValue('');
  };

  const handleSecondSelectChange = (event) => {
    setSecondSelectValue(event.target.value);
  };

  const [searchResult, setSearchResult] = useState(null);

  const [showType,setType] =useState(false);
    const changeType = () => {
      setType(!showType);

    };

    const [showNcapRating, setNcapRating] = useState(false);
    const changeNcapRating = () => {
      setNcapRating(!showNcapRating);
    };

    const [showLength, setLength] = useState(false);
    const changeLength = () => {
        setLength(!showLength);
    };

    const [showMileage, setMileage] = useState(false);
    const changeMileage = () => {
      setMileage(!showMileage);
    };

    const [showCost, setCost] = useState(false);
    const changeCost = () => {
      setCost(!showCost);
    };

    const [showTopSpeed, setTopSpeed] = useState(false);
    const changeTopSpeed = () => {
      setTopSpeed(!showTopSpeed);
    };

    const [showTorque, setTorque] = useState(false);
    const changeTorque = () => {
      setTorque(!showTorque);
    };

    
    const [showBootSpace, setBootSpace] = useState(false);
    const changeBootSpace = () => {
      setBootSpace(!showBootSpace);
    };

    const handleCompare = () => {
      switch (firstSelectValue.toLowerCase()) {
        case "nexon":
          switch (secondSelectValue.toLowerCase()) {
            case "tiago":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByType');
              }
              else
              if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareByMileage');
              }
                else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLength');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeed');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCost');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorque');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpace');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingtiago');
                        }     
              break;
            case "tigor":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByTigor');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareByMileageTigor');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLengthTigor');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedTigor');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostTigor');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorqueTigor');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpaceTigor');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingtigor');
                        }   
              break;
            case "punch":
              if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                  navigate('/CompareByPunch');
              }
              else
                if(document.getElementById('button').innerHTML=='Compare By Type'){
                  navigate('/CompareByType');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                  navigate('/CompareByLengthPunch');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedPunch');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostPunch');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorquePunch');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpacePunch');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingpunch');
                        }    
              break;
              case "altroz":
              if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                  navigate('/CompareByAltroz');
              }
              else
                if(document.getElementById('button').innerHTML=='Compare By Type'){
                  navigate('/CompareByTypeAltroz');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                  navigate('/CompareByLengthAltroz');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedAltroz');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostAltroz');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorqueAltroz');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpaceAltroz');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingAltroz');
                        }    
              break;
            default:
              setSearchResult(null);
          }
          break;
        case "celerio":
          switch (secondSelectValue.toLowerCase()) {
            case "ertiga":
                if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                    navigate('/CompareByErtiga');
                }
                else
                  if(document.getElementById('button').innerHTML=='Compare By Type'){
                    navigate('/CompareByTypeErtiga');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Length'){
                    navigate('/CompareByLengthErtiga');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                    navigate('/CompareByTopSpeedErtiga');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                      navigate('/CompareByCostErtiga');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                        navigate('/CompareByTorqueErtiga');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                          navigate('/CompareByBootSpaceErtiga');
                          }
                          else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                            navigate('/CompareByNCapRatingertiga');
                          }   
              break;
              case "dzire":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareDzire');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                  navigate('/CompareDzireM');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Length'){
                    navigate('/CompareByLengthDzire');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                      navigate('/CompareByTopSpeedDzire');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                        navigate('/CompareByCostDzire');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                          navigate('/CompareByTorqueDzire');
                          }
                          else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                            navigate('/CompareByBootSpaceDzire');
                            }
                            else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                              navigate('/CompareByNCapRatingdzire');
                            }   
              break;
              case "eeco":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByEECO');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareEECO');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLengthEECO');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedEECO');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostEECO');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorqueEECO');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpaceEECO');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingEECO');
                        }
              break;
              default:
                setSearchResult(null);
          }
          break;
        case "thar":
          switch (secondSelectValue.toLowerCase()) {
            case "bolero":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByBolero');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareByBoleroMileage');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLengthBolero');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedBolero');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostBolero');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorqueBolero');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpaceBolero');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingbolero');
                        }
              break;
            case "xuv700":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByXUV700');
              }
            else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareByXUV700M');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLengthXUV700');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                navigate('/CompareByTopSpeedXUV700');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                  navigate('/CompareByCostXUV700');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                    navigate('/CompareByTorqueXUV700');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                      navigate('/CompareByBootSpaceXUV700');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                        navigate('/CompareByNCapRatingxuv700');
                      }
            break;
            case "tuv300":
              if(document.getElementById('button').innerHTML=='Compare By Type'){
                navigate('/CompareByTUV300');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
                navigate('/CompareByTUV300M');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Length'){
                navigate('/CompareByLengthTUV300');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
                  navigate('/CompareByTopSpeedTUV300');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                    navigate('/CompareByCostTUV300');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                      navigate('/CompareByTorqueTUV300');
                      }
                      else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                        navigate('/CompareByBootSpaceTUV300');
                        }
                        else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                          navigate('/CompareByNCapRatingtuv300');
                        }
              break;
            default:
              setSearchResult(null);
          }
          break;
        case "i20":
          switch (secondSelectValue.toLowerCase()) {
        case "creta":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByCreta');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareCreta');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthCreta');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
              navigate('/CompareByTopSpeedCreta');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                navigate('/CompareByCostCreta');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                  navigate('/CompareByTorqueCreta');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                    navigate('/CompareByBootSpaceCreta');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                      navigate('/CompareByNCapRatingcreta');
                    }
          break;
        case "venue":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByVenue');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareVenue');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthVenue');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
              navigate('/CompareByTopSpeedVenue');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Cost'){
                navigate('/CompareByCostVenue');
                }
                else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                  navigate('/CompareByTorqueVenue');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                    navigate('/CompareByBootSpaceVenue');
                    }
                    else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                      navigate('/CompareByNCapRatingvenue');
                    }
          break;
        case "verna":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByVerna');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareVerna');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthVerna');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedVerna');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostVerna');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueVerna');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceVerna');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingverna');
                  }
          break;
        default:
          setSearchResult(null);
        }
        break;
        case "octivia":
          switch (secondSelectValue.toLowerCase()) {
        case "kodiaq":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByKodiaq');
         }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareKodiaq');
         }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthKodiaq');
         }
         else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
          navigate('/CompareByTopSpeedKodiaq');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Cost'){
            navigate('/CompareByCostKodiaq');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Torque'){
              navigate('/CompareByTorqueKodiaq');
              }
              else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                navigate('/CompareByBootSpaceKodiaq');
                }
                else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                  navigate('/CompareByNCapRatingkodiaq');
                }
          break;
        case "slavia":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareBySlavia');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareSlavia');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthSlavia');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedSlavia');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostSlavia');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueSlavia');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceSlavia');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingslavia');
                  }
          break;
        case "kushaq":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByKushaq');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareKushaq');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthKushaq');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedKushaq');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostKushaq');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueKushaq');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceKushaq');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingkushaq');
                  }
          break;
        default:
          setSearchResult(null);
        }
        break;
        case "carens":
          switch (secondSelectValue.toLowerCase()) {
        case "seltos":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareBySeltos');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareSeltos');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthSeltos');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedSeltos');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostSeltos');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueSeltos');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceSeltos');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingseltos');
                  }
          break;
        case "carnival":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByCarnival');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareCarnival');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthCarnival');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedCernival');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostCarnival');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueCarnival');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceCarnival');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingcarnival');
                  }
          break;
        case "ev6":
          if(document.getElementById('button').innerHTML=='Compare By Type'){
            navigate('/CompareByEV6');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Mileage'){
            navigate('/CompareEV6');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Length'){
            navigate('/CompareByLengthEV6');
          }
          else if(document.getElementById('button').innerHTML=='Compare By Top Speed'){
            navigate('/CompareByTopSpeedEV6');
            }
            else if(document.getElementById('button').innerHTML=='Compare By Cost'){
              navigate('/CompareByCostEV6');
              }
              else if(document.getElementById('button').innerHTML=='Compare By Torque'){
                navigate('/CompareByTorqueEV6');
                }
                else if(document.getElementById('button').innerHTML=='Compare By BootSpace'){
                  navigate('/CompareByBootSpaceEV6');
                  }
                  else if(document.getElementById('button').innerHTML=='Compare By NCapRating'){
                    navigate('/CompareByNCapRatingev6');
                  }
          break;
        default:
          setSearchResult(null);
        }
        default:
          setSearchResult(null);
      }
      // Reset the search query after search
      setFirstSelectValue("");
    };

  return (
    <div>
      <nav>
      <label>Please select Cars ..</label>
    <div className = "Type">
        <a href="#" className = 'ByType' name="type" id='type' onClick={changeType}>By Type</a>
        <a href="#" name="NCapRating" id='NCapRating' onClick={changeNcapRating}>By NCapRating</a>
        <a href="#" name="Length" id='Length' onClick={changeLength}>By Length</a>
        <a href="#" name="Mileage"id='Mileage' onClick={changeMileage}>By Mileage</a>
        <a href="#" name="Cost" id='Cost' onClick={changeCost}>By Cost</a>
        <a href="#" name="TopSpeed" id='TopSpeed' onClick={changeTopSpeed}>By Top Speed</a>
        <a href="#" name="Torque" id='Torque' onClick={changeTorque}>By Torque</a>
        <a href="#" name="BootSpace" id='BootSpace' onClick={changeBootSpace}>By BootSpace</a>
           </div></nav>
      
      {showType ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="1">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showType ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="2">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option} data={firstSelectValue}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
        {showType ? (<div><br></br><button id="button" value={secondSelectValue} onClick={handleCompare}>Compare By Type</button>
      </div>): (<div></div>)}

      {showNcapRating ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showNcapRating ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {NCapRating[firstSelectValue] && NCapRating[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showNcapRating ? (<div><br></br><button id='button' value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare} style={{width : "250px"}}>Compare By NCapRating</button>
      </div>): (<div></div>)}
      
      {showLength ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showLength ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showLength ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare} style={{width : "220px"}}>Compare By Length</button>
      </div>): (<div></div>)}

      {showMileage ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showMileage ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showMileage ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare} style={{width : "220px"}}>Compare By Mileage</button>
      </div>): (<div></div>)}

      {showCost ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showCost ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showCost ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare}>Compare By Cost</button>
      </div>): (<div></div>)}
      
      {showTopSpeed ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showTopSpeed ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showTopSpeed ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare} style={{width : "240px"}}>Compare By Top Speed</button>
      </div>): (<div></div>)}
      
      {showTorque ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showTorque ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showTorque ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare}>Compare By Torque</button>
      </div>): (<div></div>)}
      
      {showBootSpace ? (<div><label id="firstSelect" htmlFor="firstSelect">First Select:</label><br></br><select id="firstSelect" value={firstSelectValue} onChange={handleFirstSelectChange}>
        <option value="">Select an option</option>
        {firstSelectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showBootSpace ? (<div><label htmlFor="secondSelect">Second Select:</label><br></br><select id="secondSelect" value={secondSelectValue} onChange={handleSecondSelectChange} disabled={!firstSelectValue}>
        <option value="">Select an option</option>
        {secondSelectOptions[firstSelectValue] && secondSelectOptions[firstSelectValue].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select></div>): (<div></div>)}
      {showBootSpace ? (<div><br></br><button id="button" value={secondSelectValue} onChange={handleSecondSelectChange} onClick={handleCompare} style={{width : "240px"}}>Compare By BootSpace</button>
      </div>): (<div></div>)}
        </div>
      );
        }
    export default MainComp;
