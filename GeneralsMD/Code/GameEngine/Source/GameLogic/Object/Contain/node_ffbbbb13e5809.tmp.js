while (it != items->end() && *it )
			{
				Object* object = *it;

				//Advance to the next iterator before we apply the damage.
				//It's possible that the damage will kill the unit and foobar
				//the iterator list.
				++it;

				//Calculate the damage to be inflicted on each unit.
				Real damage = object->getBodyModule()->getMaxHealth() * percentDamage;

				DamageInfo damageInfo;
				damageInfo.in.m_damageType = DAMAGE_UNRESISTABLE;
				damageInfo.in.m_deathType = data->m_isBurnedDeathToUnits ? DEATH_BURNED : DEATH_NORMAL;
				damageInfo.in.m_sourceID = getObject()->getID();
				damageInfo.in.m_amount = damage;
				object->attemptDamage(&damageInfo);

				if (!object->isEffectivelyDead() && percentDamage == 1.0f)
					object->kill(); // in case we are carrying flame proof troops we have been asked to kill		
			}