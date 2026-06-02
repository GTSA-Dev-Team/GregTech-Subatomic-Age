/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface MenuLocator {
        abstract locate<T>(arg0: Internal.Player_, arg1: T): T;
        (arg0: Internal.Player, arg1: T): T;
    }
    type MenuLocator_ = ((arg0: Internal.Player, arg1: T)=> T) | MenuLocator;
    interface SmithingRecipe extends Internal.Recipe<net.minecraft.world.Container> {
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract isBaseIngredient(arg0: Internal.ItemStack_): boolean;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getId(): ResourceLocation;
        abstract matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        abstract isTemplateIngredient(arg0: Internal.ItemStack_): boolean;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        abstract isAdditionIngredient(arg0: Internal.ItemStack_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type SmithingRecipe_ = SmithingRecipe;
    class MapItemSavedData$HoldingPlayer {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly player: Internal.Player;
        step: number;
    }
    type MapItemSavedData$HoldingPlayer_ = MapItemSavedData$HoldingPlayer;
    class Sniffer extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        canPlayDiggingSound(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        getBrain(): Internal.Brain<Internal.Sniffer>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        isTempted(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        isPanicking(): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        transitionTo(arg0: Internal.Sniffer$State_): this;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        resetLove(): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        onDiggingComplete(arg0: boolean): this;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        canSniff(): boolean;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        isSearching(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get brain(): Internal.Brain<Internal.Sniffer>
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get tempted(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get panicking(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get searching(): boolean
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        readonly diggingAnimationState: Internal.AnimationState;
        readonly risingAnimationState: Internal.AnimationState;
        readonly scentingAnimationState: Internal.AnimationState;
        readonly feelingHappyAnimationState: Internal.AnimationState;
        readonly sniffingAnimationState: Internal.AnimationState;
    }
    type Sniffer_ = Sniffer;
    interface OwnableEntity {
        abstract getOwnerUUID(): Internal.UUID;
        abstract level(): Internal.EntityGetter;
        getOwner(): Internal.LivingEntity;
        get ownerUUID(): Internal.UUID
        get owner(): Internal.LivingEntity
    }
    type OwnableEntity_ = OwnableEntity;
    abstract class BlockBehaviour implements Internal.BlockBehaviourAccessor, Internal.BlockKJS, Internal.FeatureElement, Internal.IMixinAbstractBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        notify(): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        setDestroySpeed(v: number): void;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        abstract asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        wait(): void;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        setDrops(arg0: ResourceLocation_): void;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getClass(): typeof any;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        getMaxVerticalOffset(): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        defaultMapColor(): Internal.MapColor;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        wait(arg0: number, arg1: number): void;
        setNameKey(key: string): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        setRequiresTool(v: boolean): void;
        setSpeedFactor(arg0: number): void;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getMod(): string;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setExplosionResistance(arg0: number): void;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        toString(): string;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        notifyAll(): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getId(): string;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getLootTable(): ResourceLocation;
        requiredFeatures(): Internal.FeatureFlagSet;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        hashCode(): number;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        setSoundType(arg0: SoundType_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setHasCollision(arg0: boolean): void;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        set destroySpeed(v: number)
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get maxHorizontalOffset(): number
        set drops(arg0: ResourceLocation_)
        get class(): typeof any
        get maxVerticalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set blockBuilder(b: Internal.BlockBuilder_)
        set nameKey(key: string)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set speedFactor(arg0: number)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get mod(): string
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        set soundType(arg0: SoundType_)
        set hasCollision(arg0: boolean)
        readonly properties: Internal.BlockBehaviour$Properties;
    }
    type BlockBehaviour_ = BlockBehaviour;
    class VillagerProfessionBuilder extends Internal.BuilderBase<Internal.VillagerProfession> {
        constructor(i: ResourceLocation_)
        transformObject(obj: Internal.VillagerProfession_): Internal.VillagerProfession;
        getClass(): typeof any;
        workSound(t: Internal.SoundEvent_): this;
        createAdditionalObjects(): void;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.VillagerProfession>;
        getTranslationKeyGroup(): string;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.VillagerProfession>;
        notify(): void;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.VillagerProfession>;
        wait(arg0: number, arg1: number): void;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        get(): Internal.VillagerProfession;
        getRegistryType(): Internal.RegistryInfo<any>;
        toString(): string;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.VillagerProfession>;
        secondaryPoi(t: Internal.Block_[]): this;
        requestedItems(t: Internal.Item_[]): this;
        getBuilderTranslationKey(): string;
        createObject(): Internal.VillagerProfession;
        hashCode(): number;
        poiTypeTag(t: ResourceLocation_): this;
        poiType(t: ResourceLocation_): this;
        wait(): void;
        wait(arg0: number): void;
        generateLang(lang: Internal.LangEventJS_): void;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.VillagerProfession>;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get class(): typeof any
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
    }
    type VillagerProfessionBuilder_ = VillagerProfessionBuilder;
    interface DoubleStream$DoubleMapMultiConsumer {
        abstract accept(arg0: number, arg1: Internal.DoubleConsumer_): void;
        (arg0: number, arg1: Internal.DoubleConsumer): void;
    }
    type DoubleStream$DoubleMapMultiConsumer_ = ((arg0: number, arg1: Internal.DoubleConsumer)=> void) | DoubleStream$DoubleMapMultiConsumer;
    abstract class AbstractGolem extends Internal.PathfinderMob {
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        isOnFire(): boolean;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        breakItem(arg0: Internal.ItemStack_): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        clearRestriction(): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        "self()"(): Internal.LivingEntity;
        setXxa(arg0: number): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        removeFreeWill(): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        setInvisible(arg0: boolean): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        setHealth(arg0: number): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getKillCredit(): Internal.LivingEntity;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        canBeHitByProjectile(): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        skipDropExperience(): void;
        setSleepingPos(arg0: BlockPos_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        isVehicle(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getMaxHeadYRot(): number;
        getLeashHolder(): Internal.Entity;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        getSensing(): Internal.Sensing;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getLootTableSeed(): number;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        handleInsidePortal(arg0: BlockPos_): void;
        getArrowCount(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        self(): Internal.Entity;
        refreshDimensions(): void;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        getFirstPassenger(): Internal.Entity;
        isAddedToWorld(): boolean;
        heal(arg0: number): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getLastDamageSource(): DamageSource;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getAmbientSoundInterval(): number;
        getRestrictCenter(): BlockPos;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        getY(): number;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getLookControl(): Internal.LookControl;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        displayFireAnimation(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        isWithinRestriction(): boolean;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        getTotalMovementSpeed(): number;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getAttributes(): Internal.AttributeMap;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        getTarget(): Internal.LivingEntity;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        stopSleeping(): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        stopUsingItem(): void;
        isSleeping(): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        getSpeed(): number;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUuid(): Internal.UUID;
        setCanPickUpLoot(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        canPickUpLoot(): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        canBeSeenAsEnemy(): boolean;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        maxUpStep(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getMobType(): Internal.MobType;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        discard(): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getJumpControl(): Internal.JumpControl;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        isInvertedHealAndHarm(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        set defaultMovementSpeedMultiplier(speed: number)
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set target(arg0: Internal.LivingEntity_)
        get pitch(): number
        get random(): Internal.RandomSource
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        set totalMovementSpeedMultiplier(speed: number)
        get controlledVehicle(): Internal.Entity
        set health(arg0: number)
        get armorValue(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get killCredit(): Internal.LivingEntity
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get autoSpinAttack(): boolean
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set absorptionAmount(arg0: number)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get underWater(): boolean
        get maxHeadYRot(): number
        get leashHolder(): Internal.Entity
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get lootTableSeed(): number
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get moveControl(): Internal.MoveControl
        get onRails(): boolean
        get stingerCount(): number
        get defaultMovementSpeed(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get jumpBoostPower(): number
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get lastHurtMob(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get firstPassenger(): Internal.Entity
        get addedToWorld(): boolean
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        get restrictCenter(): BlockPos
        set arrowCount(arg0: number)
        get motionZ(): number
        get leftHanded(): boolean
        get persistenceRequired(): boolean
        get invisible(): boolean
        set z(z: number)
        get bedOrientation(): Internal.Direction
        get y(): number
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get blocking(): boolean
        get offHandItem(): Internal.ItemStack
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get withinRestriction(): boolean
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        get target(): Internal.LivingEntity
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get inWater(): boolean
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get undead(): boolean
        get noGravity(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        get speed(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get maxSpawnClusterSize(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        get mobType(): Internal.MobType
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get restrictRadius(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type AbstractGolem_ = AbstractGolem;
    class Tadpole extends Internal.AbstractFish {
        constructor(arg0: Internal.EntityType_<Internal.AbstractFish>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getTicksLeftUntilAdult(): number;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        static "createAttributes()"(): Internal.AttributeSupplier$Builder;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getBrain(): Internal.Brain<Internal.Tadpole>;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getPickupSound(): Internal.SoundEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        fromBucket(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        saveToBucketTag(arg0: Internal.ItemStack_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setFromBucket(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getBucketItemStack(): Internal.ItemStack;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get ticksLeftUntilAdult(): number
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get brain(): Internal.Brain<Internal.Tadpole>
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get pickupSound(): Internal.SoundEvent
        get blocking(): boolean
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        set fromBucket(arg0: boolean)
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get bucketItemStack(): Internal.ItemStack
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static HITBOX_WIDTH: (0.4) & (number);
        static ticksToBeFrog: (24000) & (number);
        static HITBOX_HEIGHT: (0.3) & (number);
    }
    type Tadpole_ = Tadpole;
    class QuickPlayLog$Type extends Internal.Enum<Internal.QuickPlayLog$Type> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.QuickPlayLog$Type_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.QuickPlayLog$Type;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.QuickPlayLog$Type;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.QuickPlayLog$Type>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.client.quickplay.QuickPlayLog$Type)"(arg0: Internal.QuickPlayLog$Type_): number;
        static values(): Internal.QuickPlayLog$Type[];
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.QuickPlayLog$Type
        static readonly MULTIPLAYER: (Internal.QuickPlayLog$Type) & (Internal.QuickPlayLog$Type);
        static readonly SINGLEPLAYER: (Internal.QuickPlayLog$Type) & (Internal.QuickPlayLog$Type);
        static readonly REALMS: (Internal.QuickPlayLog$Type) & (Internal.QuickPlayLog$Type);
    }
    type QuickPlayLog$Type_ = QuickPlayLog$Type | "multiplayer" | "realms" | "singleplayer";
    class CompactingUtil$Result {
        constructor(arg0: Internal.ItemStack_, arg1: number)
        getClass(): typeof any;
        setNeeded(arg0: number): void;
        toString(): string;
        notifyAll(): void;
        getNeeded(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getResult(): Internal.ItemStack;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        setResult(arg0: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set needed(arg0: number)
        get needed(): number
        get result(): Internal.ItemStack
        set result(arg0: Internal.ItemStack_)
    }
    type CompactingUtil$Result_ = CompactingUtil$Result;
    class ForgeEventWrapper extends Internal.Record {
        constructor(name: string, eventBus: Internal.IEventBus_)
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent", handler: (event: Internal.ContainerScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModProcessEvent", handler: (event: Internal.InterModProcessEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent", handler: (event: Internal.RegisterColorHandlersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", handler: (event: Internal.PlayerEvent$BreakSpeed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry", handler: (event: Internal.DataPackRegistryEvent$NewRegistry) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", handler: (event: Internal.PlayerEvent$PlayerChangedDimensionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Pre", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "top.theillusivec4.caelus.api.RenderCapeEvent", handler: (event: Internal.RenderCapeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render", handler: (event: Internal.ScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent", handler: (event: Internal.PlayerEvent$PlayerRespawnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Detonate", handler: (event: Internal.ExplosionEvent$Detonate) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click", handler: (event: Internal.ScreenMouseEvent$Click) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", handler: (event: Internal.MobEffectEvent$Applicable) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Pre", handler: (event: Internal.ScreenEvent$MouseDragged$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobEffectEvent", handler: (event: Internal.MobEffectEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.EntityRadarUpdateEvent", handler: (event: Internal.EntityRadarUpdateEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent", handler: (event: Internal.NetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent", handler: (event: Internal.ParallelDispatchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent", handler: (event: net.minecraftforge.client.event.sound.SoundEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Pre", handler: (event: Internal.ScreenEvent$MouseScrolled$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent", handler: (event: Internal.BlockEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.keksuccino.konkrete.events.ScreenMouseClickedEvent", handler: (event: Internal.ScreenMouseClickedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Reloading", handler: (event: Internal.ModConfigEvent$Reloading) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PermissionsChangedEvent", handler: (event: Internal.PermissionsChangedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", handler: (event: Internal.PlayerInteractEvent$EntityInteractSpecific) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: Internal.EntityMobGriefingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent", handler: (event: Internal.ScreenMouseEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Load", handler: (event: Internal.LevelEvent$Load) => void): any;
        getClass(): typeof any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent", handler: (event: Internal.LivingEvent$LivingTickEvent) => void): any;
        eventBus(): Internal.IEventBus;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientReloadListenersEvent", handler: (event: Internal.RegisterClientReloadListenersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityLeaveLevelEvent", handler: (event: Internal.EntityLeaveLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddPackFindersEvent", handler: (event: Internal.AddPackFindersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.FillBucketEvent", handler: (event: Internal.FillBucketEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract", handler: (event: Internal.PlayerInteractEvent$EntityInteract) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemCraftedEvent", handler: (event: Internal.PlayerEvent$ItemCraftedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre", handler: (event: Internal.RenderGuiOverlayEvent$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$BossEventProgress", handler: (event: Internal.CustomizeGuiOverlayEvent$BossEventProgress) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent", handler: (event: Internal.InterModEnqueueEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Post", handler: (event: Internal.ScreenEvent$KeyPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.MissingMappingsEvent", handler: (event: Internal.MissingMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased", handler: (event: Internal.ScreenEvent$MouseButtonReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent", handler: (event: Internal.LevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterGuiOverlaysEvent", handler: (event: Internal.RegisterGuiOverlaysEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.AnimalTameEvent", handler: (event: Internal.AnimalTameEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", handler: (event: Internal.FMLLoadCompleteEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent", handler: (event: Internal.RegisterCapabilitiesEvent) => void): any;
        wait(arg0: number): void;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.BuildCreativeModeTabContentsEvent", handler: (event: Internal.BuildCreativeModeTabContentsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged", handler: (event: Internal.ScreenEvent$MouseDragged) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AttackEntityEvent", handler: (event: Internal.AttackEntityEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Pre", handler: (event: Internal.ScreenEvent$Init$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.OptionPageConstructionEvent", handler: (event: Internal.OptionPageConstructionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerLifecycleEvent", handler: (event: Internal.ServerLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent", handler: (event: Internal.ModConfigEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent$Post", handler: (event: Internal.TextureStitchEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$Clone", handler: (event: Internal.ClientPlayerNetworkEvent$Clone) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Pre", handler: (event: Internal.ScreenEvent$Render$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.gregtechceu.gtceu.api.data.chemical.material.event.MaterialRegistryEvent", handler: (event: Internal.MaterialRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent", handler: (event: Internal.CustomizeGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemEvent", handler: (event: Internal.ItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingIn", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingIn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render", handler: (event: Internal.ContainerScreenEvent$Render) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ServerCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ServerCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Render$Post", handler: (event: Internal.ScreenEvent$Render$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.sound.SoundEvent$SoundSourceEvent", handler: (event: Internal.SoundEvent$SoundSourceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Save", handler: (event: Internal.LevelEvent$Save) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterDimensionSpecialEffectsEvent", handler: (event: Internal.RegisterDimensionSpecialEffectsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Item", handler: (event: Internal.RegisterColorHandlersEvent$Item) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent", handler: (event: Internal.PlayerInteractEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.PlayLevelSoundEvent", handler: (event: Internal.PlayLevelSoundEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent", handler: (event: Internal.EntityRenderersEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseDragged$Post", handler: (event: Internal.ScreenEvent$MouseDragged$Post) => void): any;
        name(): string;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppedEvent", handler: (event: Internal.ServerStoppedEvent) => void): any;
        wait(): void;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterAdditional", handler: (event: Internal.ModelEvent$RegisterAdditional) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent", handler: (event: Internal.PlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$BakingCompleted", handler: (event: Internal.ModelEvent$BakingCompleted) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.keksuccino.konkrete.events.ScreenKeyPressedEvent", handler: (event: Internal.ScreenKeyPressedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$AddLayers", handler: (event: Internal.EntityRenderersEvent$AddLayers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.CustomizeGuiOverlayEvent$DebugText", handler: (event: Internal.CustomizeGuiOverlayEvent$DebugText) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterRenderers", handler: (event: Internal.EntityRenderersEvent$RegisterRenderers) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterGameTestsEvent", handler: (event: Internal.RegisterGameTestsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ComputeFovModifierEvent", handler: (event: Internal.ComputeFovModifierEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Pre", handler: (event: Internal.ScreenEvent$CharacterTyped$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty", handler: (event: Internal.PlayerInteractEvent$LeftClickEmpty) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed", handler: (event: Internal.ScreenEvent$KeyPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent", handler: (event: Internal.ClientPlayerNetworkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent", handler: (event: Internal.RenderGuiEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton", handler: (event: Internal.InputEvent$MouseButton) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Background", handler: (event: Internal.ContainerScreenEvent$Render$Background) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterParticleProvidersEvent", handler: (event: Internal.RegisterParticleProvidersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent$TeleportCommand", handler: (event: Internal.EntityTeleportEvent$TeleportCommand) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.ServerChatEvent", handler: (event: Internal.ServerChatEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.LevelEvent$Unload", handler: (event: Internal.LevelEvent$Unload) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.gregtechceu.gtceu.api.cosmetics.event.RegisterGTCapesEvent", handler: (event: Internal.RegisterGTCapesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.PopupMenuEvent$FullscreenPopupMenuEvent", handler: (event: Internal.PopupMenuEvent$FullscreenPopupMenuEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed", handler: (event: Internal.ScreenEvent$MouseButtonPressed) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemPickupEvent", handler: (event: Internal.PlayerEvent$ItemPickupEvent) => void): any;
        onGenericEvent(eventClass: any, genericClass: any, consumer: Internal.GenericForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$Clone", handler: (event: Internal.PlayerEvent$Clone) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent", handler: (event: Internal.ScreenDrawEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent", handler: (event: Internal.LivingEntityUseItemEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$FarmlandTrampleEvent", handler: (event: Internal.BlockEvent$FarmlandTrampleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterNamedRenderTypesEvent", handler: (event: Internal.RegisterNamedRenderTypesEvent) => void): any;
        equals(o: any): boolean;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterShadersEvent", handler: (event: Internal.RegisterShadersEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$ItemSmeltedEvent", handler: (event: Internal.PlayerEvent$ItemSmeltedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Post", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent", handler: (event: Internal.ChunkWatchEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Pre", handler: (event: Internal.RenderGuiEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: Internal.PlayerEvent$NameFormat) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled", handler: (event: Internal.ScreenEvent$MouseScrolled) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkDataEvent", handler: (event: Internal.ChunkDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.OptionGUIConstructionEvent", handler: (event: Internal.OptionGUIConstructionEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Opening", handler: (event: Internal.ScreenEvent$Opening) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AnvilUpdateEvent", handler: (event: Internal.AnvilUpdateEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent$FinalizeSpawn", handler: (event: Internal.MobSpawnEvent$FinalizeSpawn) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$LoginPayloadEvent", handler: (event: Internal.NetworkEvent$LoginPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.keksuccino.konkrete.events.ScreenCharTypedEvent", handler: (event: Internal.ScreenCharTypedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Pre", handler: (event: Internal.ScreenEvent$KeyReleased$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "com.gregtechceu.gtceu.api.GTCEuAPI$RegisterEvent", generic: Special.JavaClass, handler: (event: Internal.GTCEuAPI$RegisterEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.PopupMenuEvent", handler: (event: Internal.PopupMenuEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.event.AttachCapabilitiesEvent", generic: Special.JavaClass, handler: (event: Internal.AttachCapabilitiesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent", handler: (event: Internal.ModelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "dev.shadowsoffire.placebo.registry.RegistryEvent$Register", generic: Special.JavaClass, handler: (event: Internal.RegistryEvent$Register) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", handler: (event: Internal.LivingEntityUseItemEvent$Finish) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent", handler: (event: Internal.TickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Pre", handler: (event: Internal.InputEvent$MouseButton$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseButton$Post", handler: (event: Internal.InputEvent$MouseButton$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.gregtechceu.gtceu.api.data.chemical.material.event.PostMaterialEvent", handler: (event: Internal.PostMaterialEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.RegisterEvent", handler: (event: Internal.RegisterEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkWatchEvent$UnWatch", handler: (event: Internal.ChunkWatchEvent$UnWatch) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Pre", handler: (event: Internal.ScreenEvent$MouseButtonReleased$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityTeleportEvent", handler: (event: Internal.EntityTeleportEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.FullscreenDisplayEvent", handler: (event: Internal.FullscreenDisplayEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased$Post", handler: (event: Internal.ScreenEvent$KeyReleased$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.EntityItemPickupEvent", handler: (event: Internal.EntityItemPickupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent", handler: (event: Internal.ScreenEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedOutEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityJoinLevelEvent", handler: (event: Internal.EntityJoinLevelEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent", handler: (event: Internal.RenderTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent", handler: (event: Internal.FMLClientSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent$PickupXp", handler: (event: Internal.PlayerXpEvent$PickupXp) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$Key", handler: (event: Internal.InputEvent$Key) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggingOut", handler: (event: Internal.ClientPlayerNetworkEvent$LoggingOut) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped$Post", handler: (event: Internal.ScreenEvent$CharacterTyped$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseInput", handler: (event: Internal.ScreenEvent$MouseInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyInput", handler: (event: Internal.ScreenEvent$KeyInput) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent", handler: (event: Internal.EmbeddiumEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent", handler: (event: Internal.ExplosionEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.TextureStitchEvent", handler: (event: Internal.TextureStitchEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.gregtechceu.gtceu.api.data.chemical.material.event.MaterialEvent", handler: (event: Internal.MaterialEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Post", handler: (event: Internal.ScreenEvent$MouseScrolled$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent$Post", handler: (event: Internal.RenderGuiOverlayEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void): any;
        toString(): string;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent$Block", handler: (event: Internal.RenderHighlightEvent$Block) => void): any;
        notifyAll(): void;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent", handler: (event: net.minecraftforge.client.event.InputEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered", handler: (event: Internal.InputEvent$InteractionKeyMappingTriggered) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "com.anthonyhilyard.iceberg.events.RenderTooltipExtEvent$Post", handler: (event: Internal.RenderTooltipExtEvent$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$CharacterTyped", handler: (event: Internal.ScreenEvent$CharacterTyped) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$ClientCustomPayloadEvent", handler: (event: Internal.NetworkEvent$ClientCustomPayloadEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.server.permission.events.PermissionGatherEvent", handler: (event: Internal.PermissionGatherEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.keksuccino.konkrete.events.ScreenKeyReleasedEvent", handler: (event: Internal.ScreenKeyReleasedEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStoppingEvent", handler: (event: Internal.ServerStoppingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.FullscreenDisplayEvent$AddonButtonDisplayEvent", handler: (event: Internal.FullscreenDisplayEvent$AddonButtonDisplayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent", handler: (event: Internal.FMLCommonSetupEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent", handler: (event: Internal.ScreenKeyEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent", handler: (event: Internal.ModLifecycleEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open", handler: (event: Internal.PlayerContainerEvent$Open) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterColorHandlersEvent$Block", handler: (event: Internal.RegisterColorHandlersEvent$Block) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent", handler: (event: Internal.AdvancementEvent$AdvancementEarnEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerXpEvent", handler: (event: Internal.PlayerXpEvent) => void): any;
        notify(): void;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions", handler: (event: Internal.EntityRenderersEvent$RegisterLayerDefinitions) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityEvent", handler: (event: Internal.EntityEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterItemDecorationsEvent", handler: (event: Internal.RegisterItemDecorationsEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderHighlightEvent", handler: (event: Internal.RenderHighlightEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$ModifyBakingResult", handler: (event: Internal.ModelEvent$ModifyBakingResult) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.data.event.GatherDataEvent", handler: (event: Internal.GatherDataEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent", handler: (event: Internal.FMLConstructModEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Post", handler: (event: Internal.ScreenEvent$MouseButtonPressed$Post) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiEvent$Post", handler: (event: Internal.RenderGuiEvent$Post) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Closing", handler: (event: Internal.ScreenEvent$Closing) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyPressed$Pre", handler: (event: Internal.ScreenEvent$KeyPressed$Pre) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: Internal.EnderManAngerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.DataPackRegistryEvent", handler: (event: Internal.DataPackRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "dev.shadowsoffire.placebo.registry.RegistryEvent", generic: Special.JavaClass, handler: (event: Internal.RegistryEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent", handler: (event: Internal.PlayerDestroyItemEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", handler: (event: Internal.InputEvent$MouseScrollingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "de.keksuccino.konkrete.events.ScreenTickEvent", handler: (event: Internal.ScreenTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.TickEvent$LevelTickEvent", handler: (event: Internal.TickEvent$LevelTickEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.LivingEvent", handler: (event: Internal.LivingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release", handler: (event: Internal.ScreenMouseEvent$Release) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickItem", handler: (event: Internal.PlayerInteractEvent$RightClickItem) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterKeyMappingsEvent", handler: (event: Internal.RegisterKeyMappingsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.living.MobSpawnEvent", handler: (event: Internal.MobSpawnEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ExplosionEvent$Start", handler: (event: Internal.ExplosionEvent$Start) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ModelEvent$RegisterGeometryLoaders", handler: (event: Internal.ModelEvent$RegisterGeometryLoaders) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderGuiOverlayEvent", handler: (event: Internal.RenderGuiOverlayEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.FullscreenDisplayEvent$CustomToolbarEvent", handler: (event: Internal.FullscreenDisplayEvent$CustomToolbarEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent", handler: (event: Internal.ScreenInitEvent) => void): any;
        wait(arg0: number, arg1: number): void;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$KeyReleased", handler: (event: Internal.ScreenEvent$KeyReleased) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent", handler: (event: Internal.RegisterClientTooltipComponentFactoriesEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onGenericEvent(eventClass: "net.minecraftforge.eventbus.api.GenericEvent", generic: Special.JavaClass, handler: (event: Internal.GenericEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", handler: (event: Internal.PlayerInteractEvent$RightClickEmpty) => void): any;
        onEvent(eventClass: any, consumer: Internal.ForgeEventConsumer_): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ViewportEvent", handler: (event: Internal.ViewportEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.level.ChunkEvent", handler: (event: Internal.ChunkEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.RenderPlayerEvent", handler: (event: Internal.RenderPlayerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.network.NetworkEvent$GatherLoginPayloadsEvent", handler: (event: Internal.NetworkEvent$GatherLoginPayloadsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.fml.event.config.ModConfigEvent$Loading", handler: (event: Internal.ModConfigEvent$Loading) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.GameShuttingDownEvent", handler: (event: Internal.GameShuttingDownEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.player.PlayerContainerEvent", handler: (event: Internal.PlayerContainerEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.IdMappingEvent", handler: (event: Internal.IdMappingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init", handler: (event: Internal.ScreenEvent$Init) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ContainerScreenEvent$Render$Foreground", handler: (event: Internal.ContainerScreenEvent$Render$Foreground) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press", handler: (event: Internal.ScreenKeyEvent$Press) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "journeymap.client.api.event.forge.PopupMenuEvent$WaypointPopupMenuEvent", handler: (event: Internal.PopupMenuEvent$WaypointPopupMenuEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.client.event.ScreenEvent$Init$Post", handler: (event: Internal.ScreenEvent$Init$Post) => void): any;
        hashCode(): number;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent", handler: (event: Internal.ContainerScreenDrawEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.registries.NewRegistryEvent", handler: (event: Internal.NewRegistryEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void): any;
        /**
         * This event is cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.blay09.mods.balm.api.event.BalmEvent", handler: (event: Internal.BalmEvent) => void): any;
        /**
         * This event is **not** cancellable
         * 
         * This event does **not** have a result
         * 
        */
        onEvent(eventClass: "net.minecraftforge.event.entity.EntityAttributeModificationEvent", handler: (event: Internal.EntityAttributeModificationEvent) => void): any;
        get class(): typeof any
    }
    type ForgeEventWrapper_ = ForgeEventWrapper;
    interface IForgePackResources {
        isHidden(): boolean;
        getChildren(): Internal.Collection<Internal.PackResources>;
        get hidden(): boolean
        get children(): Internal.Collection<Internal.PackResources>
    }
    type IForgePackResources_ = IForgePackResources;
    interface Lock {
        abstract unlock(): void;
        abstract lock(): void;
        abstract tryLock(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract tryLock(): boolean;
        abstract lockInterruptibly(): void;
        abstract newCondition(): Internal.Condition;
    }
    type Lock_ = Lock;
    interface IMolecularAssemblerSupportedPattern extends Internal.IPatternDetails {
        abstract fillCraftingGrid(arg0: Internal.KeyCounter_[], arg1: Internal.IMolecularAssemblerSupportedPattern$CraftingGridAccessor_): void;
        pushInputsToExternalInventory(arg0: Internal.KeyCounter_[], arg1: Internal.IPatternDetails$PatternInputSink_): void;
        abstract getDefinition(): Internal.AEItemKey;
        abstract isSlotEnabled(arg0: number): boolean;
        getPrimaryOutput(): Internal.GenericStack;
        abstract getInputs(): any[];
        supportsPushInputsToExternalInventory(): boolean;
        abstract getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        abstract isItemValid(arg0: number, arg1: Internal.AEItemKey_, arg2: Internal.Level_): boolean;
        abstract assemble(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): Internal.ItemStack;
        abstract getOutputs(): Internal.GenericStack[];
        get definition(): Internal.AEItemKey
        get primaryOutput(): Internal.GenericStack
        get inputs(): any[]
        get outputs(): Internal.GenericStack[]
    }
    type IMolecularAssemblerSupportedPattern_ = IMolecularAssemblerSupportedPattern;
    interface DoubleToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToLongFunction_ = DoubleToLongFunction | ((arg0: number)=> number);
    class UIEvents$BlockUIEventJS extends Internal.EventJS {
        constructor(level: Internal.Level_, pos: BlockPos_, block: Internal.BlockContainerJS_, player: Internal.Player_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        getPos(): BlockPos;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        get level(): Internal.Level
        get pos(): BlockPos
        get player(): Internal.Player
        get block(): Internal.BlockContainerJS
        player: Internal.Player;
        pos: BlockPos;
        block: Internal.BlockContainerJS;
        level: Internal.Level;
    }
    type UIEvents$BlockUIEventJS_ = UIEvents$BlockUIEventJS;
    class RuleBasedBlockStateProvider$Rule extends Internal.Record {
        constructor(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: Internal.BlockStateProvider_)
        ifTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        hashCode(): number;
        then(): Internal.BlockStateProvider;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.RuleBasedBlockStateProvider$Rule>;
    }
    type RuleBasedBlockStateProvider$Rule_ = RuleBasedBlockStateProvider$Rule;
    interface LevelTimeAccess extends Internal.LevelReader {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        abstract getBiomeManager(): Internal.BiomeManager;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract isClientSide(): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getMinBuildHeight(): number;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        "noCollision(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        abstract hasChunk(arg0: number, arg1: number): boolean;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        getMoonBrightness(): number;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getLightEngine(): Internal.LevelLightEngine;
        abstract getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        "noCollision(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): boolean;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get biomeManager(): Internal.BiomeManager
        get clientSide(): boolean
        get moonPhase(): number
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelTimeAccess_ = LevelTimeAccess;
    interface BlockStateFTBC {
        abstract getFTBCIsWater(): boolean;
        get FTBCIsWater(): boolean
        (): boolean;
    }
    type BlockStateFTBC_ = BlockStateFTBC | (()=> boolean);
    interface TagPrefix$BlockItemConstructor {
        abstract create(arg0: Internal.Block_, arg1: Internal.Item$Properties_, arg2: TagPrefix_, arg3: com.gregtechceu.gtceu.api.data.chemical.material.Material_): Internal.BlockItem;
        (arg0: Internal.Block, arg1: Internal.Item$Properties, arg2: TagPrefix, arg3: com.gregtechceu.gtceu.api.data.chemical.material.Material): Internal.BlockItem_;
    }
    type TagPrefix$BlockItemConstructor_ = ((arg0: Internal.Block, arg1: Internal.Item$Properties, arg2: TagPrefix, arg3: com.gregtechceu.gtceu.api.data.chemical.material.Material)=> Internal.BlockItem_) | TagPrefix$BlockItemConstructor;
    class DecimalFormatSymbols implements Internal.Cloneable, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Locale_)
        clone(): any;
        getClass(): typeof any;
        getDecimalSeparator(): string;
        setDecimalSeparator(arg0: string): void;
        setInternationalCurrencySymbol(arg0: string): void;
        getInternationalCurrencySymbol(): string;
        static getAvailableLocales(): Internal.Locale[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getNaN(): string;
        getMinusSign(): string;
        getMonetaryDecimalSeparator(): string;
        getCurrency(): Internal.Currency;
        getPercent(): string;
        setCurrency(arg0: Internal.Currency_): void;
        getDigit(): string;
        getPerMill(): string;
        setPerMill(arg0: string): void;
        setPercent(arg0: string): void;
        setMonetaryDecimalSeparator(arg0: string): void;
        setMonetaryGroupingSeparator(arg0: string): void;
        static getInstance(): Internal.DecimalFormatSymbols;
        toString(): string;
        setMinusSign(arg0: string): void;
        notifyAll(): void;
        getGroupingSeparator(): string;
        getCurrencySymbol(): string;
        getPatternSeparator(): string;
        static getInstance(arg0: Internal.Locale_): Internal.DecimalFormatSymbols;
        getZeroDigit(): string;
        setNaN(arg0: string): void;
        getExponentSeparator(): string;
        setCurrencySymbol(arg0: string): void;
        hashCode(): number;
        wait(): void;
        setGroupingSeparator(arg0: string): void;
        wait(arg0: number): void;
        setZeroDigit(arg0: string): void;
        setDigit(arg0: string): void;
        setPatternSeparator(arg0: string): void;
        equals(arg0: any): boolean;
        setExponentSeparator(arg0: string): void;
        getMonetaryGroupingSeparator(): string;
        getInfinity(): string;
        setInfinity(arg0: string): void;
        get class(): typeof any
        get decimalSeparator(): string
        set decimalSeparator(arg0: string)
        set internationalCurrencySymbol(arg0: string)
        get internationalCurrencySymbol(): string
        get availableLocales(): Internal.Locale[]
        get naN(): string
        get minusSign(): string
        get monetaryDecimalSeparator(): string
        get currency(): Internal.Currency
        get percent(): string
        set currency(arg0: Internal.Currency_)
        get digit(): string
        get perMill(): string
        set perMill(arg0: string)
        set percent(arg0: string)
        set monetaryDecimalSeparator(arg0: string)
        set monetaryGroupingSeparator(arg0: string)
        get instance(): Internal.DecimalFormatSymbols
        set minusSign(arg0: string)
        get groupingSeparator(): string
        get currencySymbol(): string
        get patternSeparator(): string
        get zeroDigit(): string
        set naN(arg0: string)
        get exponentSeparator(): string
        set currencySymbol(arg0: string)
        set groupingSeparator(arg0: string)
        set zeroDigit(arg0: string)
        set digit(arg0: string)
        set patternSeparator(arg0: string)
        set exponentSeparator(arg0: string)
        get monetaryGroupingSeparator(): string
        get infinity(): string
        set infinity(arg0: string)
    }
    type DecimalFormatSymbols_ = DecimalFormatSymbols;
    interface EntityTypeTest <B, T extends B> {
        abstract tryCast(arg0: B): T;
        abstract getBaseClass(): B;
        forClass<B, T extends B>(arg0: T): this;
        get baseClass(): B
    }
    type EntityTypeTest_<B, T extends B> = EntityTypeTest<B, T>;
    class DragonSittingFlamingPhase extends Internal.AbstractDragonSittingPhase {
        constructor(arg0: Internal.EnderDragon_)
        doClientTick(): void;
        getClass(): typeof any;
        onHurt(arg0: DamageSource_, arg1: number): number;
        toString(): string;
        getFlyTargetLocation(): Vec3d;
        getFlySpeed(): number;
        notifyAll(): void;
        begin(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        isSitting(): boolean;
        end(): void;
        wait(): void;
        getTurnSpeed(): number;
        wait(arg0: number): void;
        resetFlameCount(): void;
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_, arg3: Internal.Player_): void;
        doServerTick(): void;
        getPhase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get flyTargetLocation(): Vec3d
        get flySpeed(): number
        get sitting(): boolean
        get turnSpeed(): number
        get phase(): Internal.EnderDragonPhase<Internal.DragonSittingFlamingPhase>
    }
    type DragonSittingFlamingPhase_ = DragonSittingFlamingPhase;
    class GrindstoneBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        static canAttach(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WALL_EAST_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_RIGHT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_SOUTH_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_NORTH_SOUTH_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_NORTH_LEFT_PIVOT: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_LEFT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_ALL_LEGS: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly CEILING_EAST_WEST_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_LEFT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_EAST_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_EAST_WEST_GRINDSTONE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_RIGHT_LEG: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FLOOR_NORTH_SOUTH_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly WALL_WEST_RIGHT_POST: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type GrindstoneBlock_ = GrindstoneBlock;
    class WaterFluid$Flowing extends Internal.WaterFluid {
        constructor()
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        getDripParticle(): Internal.ParticleOptions;
        getAmount(arg0: Internal.FluidState_): number;
        getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        getSource(arg0: boolean): Internal.FluidState;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        getDropOff(arg0: Internal.LevelReader_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        wait(arg0: number): void;
        getSource(): Internal.Fluid;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get dripParticle(): Internal.ParticleOptions
        get flowing(): Internal.Fluid
        get bucket(): Internal.Item
        get source(): Internal.Fluid
    }
    type WaterFluid$Flowing_ = WaterFluid$Flowing;
    interface Function10 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function3<T8, T9, T10, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function<T10, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function5<T6, T7, T8, T9, T10, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.BiFunction<T9, T10, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function7<T4, T5, T6, T7, T8, T9, T10, R>>;
        curry(): Internal.Function<T1, Internal.Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function6<T5, T6, T7, T8, T9, T10, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function4<T7, T8, T9, T10, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
    }
    type Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10)=> R) | Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    class ArrayTable <R, C, V> extends Internal.AbstractTable<R, C, V> implements Internal.Serializable {
        getClass(): typeof any;
        eraseAll(): void;
        columnKeyList(): Internal.ImmutableList<C>;
        containsValue(arg0: any): boolean;
        cellSet(): Internal.Set<Internal.Table$Cell<R, C, V>>;
        rowMap(): Internal.Map<R, Internal.Map<C, V>>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        toArray(arg0: V): V[][];
        static create<R, C, V>(arg0: Internal.Iterable_<R>, arg1: Internal.Iterable_<C>): Internal.ArrayTable<R, C, V>;
        rowKeyList(): Internal.ImmutableList<R>;
        set(arg0: number, arg1: number, arg2: V): V;
        row(arg0: R): Internal.Map<C, V>;
        at(arg0: number, arg1: number): V;
        erase(arg0: any, arg1: any): V;
        columnKeySet(): Internal.Set<any>;
        static create<R, C, V>(arg0: Internal.Table_<R, C, V>): Internal.ArrayTable<R, C, V>;
        toString(): string;
        putAll(arg0: Internal.Table_<R, C, V>): void;
        values(): Internal.Collection<V>;
        notifyAll(): void;
        column(arg0: C): Internal.Map<R, V>;
        rowKeySet(): Internal.ImmutableSet<R>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): V;
        put(arg0: R, arg1: C, arg2: V): V;
        hashCode(): number;
        size(): number;
        wait(): void;
        /**
         * @deprecated
        */
        clear(): void;
        contains(arg0: any, arg1: any): boolean;
        wait(arg0: number): void;
        containsRow(arg0: any): boolean;
        equals(arg0: any): boolean;
        columnMap(): Internal.Map<C, Internal.Map<R, V>>;
        get(arg0: any, arg1: any): V;
        containsColumn(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type ArrayTable_<R, C, V> = ArrayTable<R, C, V>;
    class LockCode {
        constructor(arg0: string)
        getClass(): typeof any;
        static fromTag(arg0: Internal.CompoundTag_): Internal.LockCode;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        unlocksWith(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addToTag(arg0: Internal.CompoundTag_): void;
        get class(): typeof any
        static readonly NO_LOCK: (Internal.LockCode) & (Internal.LockCode);
        static readonly TAG_LOCK: ("Lock") & (string);
    }
    type LockCode_ = LockCode;
    class BaseCoralPlantBlock extends Internal.BaseCoralPlantTypeBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BaseCoralPlantBlock_ = BaseCoralPlantBlock;
    class HorizontalDirectionalBlockBuilder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Note block instrument.
        */
        instrument(i: Internal.NoteBlockInstrument_): Internal.BlockBuilder;
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
        */
        bounciness(bounciness: number): Internal.BlockBuilder;
        "transformObject(net.minecraft.world.level.block.Block)"(obj: Internal.Block_): Internal.Block;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
        */
        fallenOn(callbackJS: Internal.Consumer_<Internal.EntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        createAdditionalObjects(): void;
        /**
         * Tags the item with the given tag.
        */
        tagItem(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.Block>;
        /**
         * Set the block's model.
        */
        model(m: string): Internal.BlockBuilder;
        createObject(): any;
        sandSoundType(): Internal.BlockBuilder;
        getTranslationKeyGroup(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Internal.BlockBuilder;
        notify(): void;
        get(): Internal.Block;
        /**
         * Makes the block a redstone conductor.
        */
        redstoneConductor(b: boolean): Internal.BlockBuilder;
        noSoundType(): Internal.BlockBuilder;
        /**
         * Modifies the block's item representation.
        */
        item(i: Internal.Consumer_<Internal.BlockItemBuilder>): Internal.BlockBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Set the default state of the block.
        */
        defaultState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyCallbackJS>): Internal.BlockBuilder;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
        */
        steppedOn(callbackJS: Internal.Consumer_<Internal.EntitySteppedOnBlockCallbackJS>): Internal.BlockBuilder;
        textureAll(arg0: string): Internal.BlockBuilder;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.Block>;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
        */
        defaultTranslucent(): Internal.BlockBuilder;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
        */
        dynamicMapColor(m: Internal.Function_<Internal.BlockState, any>): Internal.BlockBuilder;
        /**
         * Tags both the block and the item with the given tag.
        */
        tagBoth(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Makes the block view blocking.
        */
        viewBlocking(b: boolean): Internal.BlockBuilder;
        /**
         * Makes the block unbreakable.
        */
        unbreakable(): Internal.BlockBuilder;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
        */
        property(property: Internal.Property_<any>): Internal.BlockBuilder;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
        */
        resistance(r: number): Internal.BlockBuilder;
        gravelSoundType(): Internal.BlockBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): Internal.BlockBuilder;
        /**
         * Set the callback for determining the blocks state when placed.
        */
        placementState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyPlacementCallbackJS>): Internal.BlockBuilder;
        /**
         * Set if the block can be replaced by something else.
        */
        canBeReplaced(callbackJS: Internal.Predicate_<Internal.CanBeReplacedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets random tick callback for this black.
        */
        randomTick(randomTickCallback: Internal.Consumer_<Internal.RandomTickCallbackJS>): Internal.BlockBuilder;
        wait(): void;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
        */
        exploded(callbackJS: Internal.Consumer_<Internal.BlockExplodedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
        */
        lightLevel(light: number): Internal.BlockBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Block>;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Block>;
        /**
         * Sets the block's map color. Defaults to NONE.
        */
        mapColor(m: Internal.MapColor_): Internal.BlockBuilder;
        static createShape(boxes: Internal.List_<Internal.AABB>): Internal.VoxelShape;
        /**
         * Makes the block not be solid.
        */
        notSolid(): Internal.BlockBuilder;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
        */
        renderType(l: string): Internal.BlockBuilder;
        /**
         * Clears all drops for the block.
        */
        noDrops(): Internal.BlockBuilder;
        getClass(): typeof any;
        stoneSoundType(): Internal.BlockBuilder;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setWaterlogged(waterlogged: boolean): Internal.BlockBuilder;
        grassSoundType(): Internal.BlockBuilder;
        createProperties(): Internal.BlockBehaviour$Properties;
        /**
         * Makes the block can be waterlogged.
        */
        waterlogged(): Internal.BlockBuilder;
        /**
         * Sets the block's sound type. Defaults to wood.
        */
        soundType(m: SoundType_): Internal.BlockBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        /**
         * Set how high you can jump on the block.
        */
        jumpFactor(f: number): Internal.BlockBuilder;
        /**
         * Set the callback used for determining how the block rotates
        */
        rotateState(callbackJS: Internal.Consumer_<Internal.BlockStateRotateCallbackJS>): Internal.BlockBuilder;
        /**
         * Set the callback used for right-clicking on the block
        */
        rightClick(callbackJS: Internal.Consumer_<Internal.BlockRightClickedEventJS>): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(f: boolean): Internal.BlockBuilder;
        /**
         * Texture a specific texture key of the block.
        */
        texture(id: string, tex: string): Internal.BlockBuilder;
        /**
         * Texture a specific side of the block.
        */
        textureSide(direction: Internal.Direction_, tex: string): Internal.BlockBuilder;
        /**
         * Checks if the block can be waterlogged.
        */
        canBeWaterlogged(): boolean;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
        */
        hardness(h: number): Internal.BlockBuilder;
        glassSoundType(): Internal.BlockBuilder;
        /**
         * Creates a Block Entity for this block
        */
        blockEntity(callback: Internal.Consumer_<Internal.BlockEntityInfo>): Internal.BlockBuilder;
        /**
         * Set the block to have no corresponding item.
        */
        noItem(): Internal.BlockBuilder;
        transformObject(arg0: any): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWaterlogged(): boolean;
        /**
         * Set the callback used for determining how the block is mirrored
        */
        mirrorState(callbackJS: Internal.Consumer_<Internal.BlockStateMirrorCallbackJS>): Internal.BlockBuilder;
        /**
         * Set how slippery the block is.
        */
        slipperiness(f: number): Internal.BlockBuilder;
        /**
         * Tags the block with the given tag.
        */
        tagBlock(tag: ResourceLocation_): Internal.BlockBuilder;
        toString(): string;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
        */
        opaque(o: boolean): Internal.BlockBuilder;
        woodSoundType(): Internal.BlockBuilder;
        notifyAll(): void;
        /**
         * Makes mobs not spawn on the block.
        */
        noValidSpawns(b: boolean): Internal.BlockBuilder;
        material(material: string): Internal.BlockBuilder;
        transformObject(obj: Internal.Block_): Internal.Block;
        /**
         * Makes the block transparent.
        */
        transparent(b: boolean): Internal.BlockBuilder;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
        */
        defaultCutout(): Internal.BlockBuilder;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
        */
        fullBlock(f: boolean): Internal.BlockBuilder;
        /**
         * Makes the block not collide with entities.
        */
        noCollision(): Internal.BlockBuilder;
        hashCode(): number;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
        */
        afterFallenOn(callbackJS: Internal.Consumer_<Internal.AfterEntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Makes the block suffocating.
        */
        suffocating(b: boolean): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(index: number, color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        wait(arg0: number): void;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
        */
        speedFactor(f: number): Internal.BlockBuilder;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(): Internal.BlockBuilder;
        equals(arg0: any): boolean;
        cropSoundType(): Internal.BlockBuilder;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set waterlogged(waterlogged: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get waterlogged(): boolean
    }
    type HorizontalDirectionalBlockBuilder_ = HorizontalDirectionalBlockBuilder;
    class ClientboundRemoveEntitiesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(...arg0: number[])
        constructor(arg0: Internal.IntList_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        getEntityIds(): Internal.IntList;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get entityIds(): Internal.IntList
    }
    type ClientboundRemoveEntitiesPacket_ = ClientboundRemoveEntitiesPacket;
    class ChatComponent {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        static defaultUnfocusedPct(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLinesPerPage(): number;
        getClickedComponentStyleAt(arg0: number, arg1: number): Internal.Style;
        addMessage(arg0: net.minecraft.network.chat.Component_, arg1: Internal.MessageSignature_, arg2: Internal.GuiMessageTag_): void;
        getHeight(): number;
        resetChatScroll(): void;
        constant$zzg000$placebo_unEscapeChatLogNewlines(arg0: string): string;
        addMessage(arg0: net.minecraft.network.chat.Component_): void;
        toString(): string;
        getWidth(): number;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        notifyAll(): void;
        rescaleChat(): void;
        getScale(): number;
        addRecentChat(arg0: string): void;
        getMessageTagAt(arg0: number, arg1: number): Internal.GuiMessageTag;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        tick(): void;
        scrollChat(arg0: number): void;
        static getHeight(arg0: number): number;
        hashCode(): number;
        deleteMessage(arg0: Internal.MessageSignature_): void;
        getRecentChat(): Internal.List<string>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static getWidth(arg0: number): number;
        clearMessages(arg0: boolean): void;
        get class(): typeof any
        get linesPerPage(): number
        get height(): number
        get width(): number
        get scale(): number
        get recentChat(): Internal.List<string>
    }
    type ChatComponent_ = ChatComponent;
    class Content {
        constructor(arg0: any, arg1: number, arg2: number, arg3: number)
        getContent(): any;
        getClass(): typeof any;
        copy(arg0: RecipeCapability_<any>): this;
        drawTick(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawFluidAmount(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        toString(): string;
        createOverlay(arg0: boolean, arg1: number, arg2: number, arg3: Internal.ChanceBoostFunction_): Internal.IGuiTexture;
        notifyAll(): void;
        drawRangeAmount(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        copy(arg0: RecipeCapability_<any>, arg1: Internal.ContentModifier_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        copyChanced(arg0: RecipeCapability_<any>, arg1: Internal.ContentModifier_): this;
        isChanced(): boolean;
        wait(): void;
        wait(arg0: number): void;
        drawChance(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ChanceBoostFunction_): void;
        equals(arg0: any): boolean;
        static codec<T>(arg0: RecipeCapability_<T>): Internal.Codec<Internal.Content>;
        get content(): any
        get class(): typeof any
        get chanced(): boolean
        readonly content: any;
        readonly maxChance: number;
        readonly chance: number;
        readonly tierChanceBoost: number;
    }
    type Content_ = Content;
    class ResourceKeyArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.ResourceKeyArgument<T>> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        type(): Internal.ArgumentTypeInfo<Internal.ResourceKeyArgument<T>, any>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ResourceKeyArgument$Info$Template_ = ResourceKeyArgument$Info$Template;
    interface Function15 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function3<T13, T14, T15, R>>;
        curry(): Internal.Function<T1, Internal.Function14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function5<T11, T12, T13, T14, T15, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function8<T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.BiFunction<T14, T15, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function4<T12, T13, T14, T15, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function6<T10, T11, T12, T13, T14, T15, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.Function<T15, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function7<T9, T10, T11, T12, T13, T14, T15, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
    }
    type Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15)=> R);
    interface InventoryCarrier {
        abstract getInventory(): Internal.SimpleContainer;
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
        pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
        get inventory(): Internal.SimpleContainer
        (): Internal.SimpleContainer_;
        readonly TAG_INVENTORY: ("Inventory") & (string);
    }
    type InventoryCarrier_ = (()=> Internal.SimpleContainer_) | InventoryCarrier;
    interface Function16 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function8<T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry(): Internal.Function<T1, Internal.Function15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry15(): Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, Internal.Function<T16, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function3<T14, T15, T16, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function4<T13, T14, T15, T16, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function5<T12, T13, T14, T15, T16, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function7<T10, T11, T12, T13, T14, T15, T16, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function6<T11, T12, T13, T14, T15, T16, R>>;
        curry14(): Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, Internal.BiFunction<T15, T16, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
    }
    type Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16)=> R);
    interface Function13 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
        curry2(): Internal.BiFunction<T1, T2, Internal.Function11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function8<T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.Function<T13, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function7<T7, T8, T9, T10, T11, T12, T13, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function5<T9, T10, T11, T12, T13, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.BiFunction<T12, T13, R>>;
        curry(): Internal.Function<T1, Internal.Function12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function6<T8, T9, T10, T11, T12, T13, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function3<T11, T12, T13, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function4<T10, T11, T12, T13, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
    }
    type Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13)=> R) | Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
    class ClientboundCooldownPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Item_, arg1: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getItem(): Internal.Item;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getDuration(): number;
        get class(): typeof any
        get skippable(): boolean
        get item(): Internal.Item
        get duration(): number
    }
    type ClientboundCooldownPacket_ = ClientboundCooldownPacket;
    interface PrivilegedAction <T> {
        abstract run(): T;
        (): T;
    }
    type PrivilegedAction_<T> = PrivilegedAction<T> | (()=> T);
    interface Function14 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function6<T9, T10, T11, T12, T13, T14, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function7<T8, T9, T10, T11, T12, T13, T14, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function4<T11, T12, T13, T14, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function8<T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry13(): Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, Internal.Function<T14, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function5<T10, T11, T12, T13, T14, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function3<T12, T13, T14, R>>;
        curry12(): Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, Internal.BiFunction<T13, T14, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry(): Internal.Function<T1, Internal.Function13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
    }
    type Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14)=> R);
    interface SpriteContentsInvoker {
        abstract invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage_[]): void;
        (arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage[]): void;
    }
    type SpriteContentsInvoker_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.NativeImage[])=> void) | SpriteContentsInvoker;
    interface Function11 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function7<T5, T6, T7, T8, T9, T10, T11, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function3<T9, T10, T11, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function5<T7, T8, T9, T10, T11, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.BiFunction<T10, T11, R>>;
        curry(): Internal.Function<T1, Internal.Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function6<T6, T7, T8, T9, T10, T11, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function4<T8, T9, T10, T11, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.Function<T11, R>>;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
    }
    type Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11)=> R) | Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
    interface Function12 <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
        curry9(): Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, Internal.Function3<T10, T11, T12, R>>;
        curry6(): Internal.Function6<T1, T2, T3, T4, T5, T6, Internal.Function6<T7, T8, T9, T10, T11, T12, R>>;
        curry11(): Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Internal.Function<T12, R>>;
        curry10(): Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Internal.BiFunction<T11, T12, R>>;
        curry(): Internal.Function<T1, Internal.Function11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry4(): Internal.Function4<T1, T2, T3, T4, Internal.Function8<T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry5(): Internal.Function5<T1, T2, T3, T4, T5, Internal.Function7<T6, T7, T8, T9, T10, T11, T12, R>>;
        curry3(): Internal.Function3<T1, T2, T3, Internal.Function9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry8(): Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, Internal.Function4<T9, T10, T11, T12, R>>;
        curry2(): Internal.BiFunction<T1, T2, Internal.Function10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry7(): Internal.Function7<T1, T2, T3, T4, T5, T6, T7, Internal.Function5<T8, T9, T10, T11, T12, R>>;
        abstract apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
        (arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
    }
    type Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12)=> R) | Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
    class StructureTemplateManager {
        constructor(arg0: Internal.ResourceManager_, arg1: Internal.LevelStorageSource$LevelStorageAccess_, arg2: Internal.DataFixer_, arg3: Internal.HolderGetter_<Internal.Block>)
        listTemplates(): Internal.Stream<ResourceLocation>;
        getClass(): typeof any;
        save(arg0: ResourceLocation_): boolean;
        toString(): string;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        readStructure(arg0: Internal.CompoundTag_): Internal.StructureTemplate;
        getOrCreate(arg0: ResourceLocation_): Internal.StructureTemplate;
        notify(): void;
        static createPathToStructure(arg0: Internal.Path_, arg1: ResourceLocation_, arg2: string): Internal.Path;
        wait(arg0: number, arg1: number): void;
        getPathToGeneratedStructure(arg0: ResourceLocation_, arg1: string): Internal.Path;
        hashCode(): number;
        wait(): void;
        remove(arg0: ResourceLocation_): void;
        wait(arg0: number): void;
        get(arg0: ResourceLocation_): Internal.Optional<Internal.StructureTemplate>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type StructureTemplateManager_ = StructureTemplateManager;
    class CompactingUtil {
        constructor(arg0: Internal.Level_, arg1: number)
        getClass(): typeof any;
        setup(arg0: Internal.ItemStack_): void;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getResults(): Internal.List<Internal.CompactingUtil$Result>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        set up(arg0: Internal.ItemStack_)
        get results(): Internal.List<Internal.CompactingUtil$Result>
    }
    type CompactingUtil_ = CompactingUtil;
    class ServerChunkCache$MainThreadExecutor extends Internal.BlockableEventLoop<Internal.Runnable> {
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        tell(arg0: Internal.Runnable_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        "tell(java.lang.Runnable)"(arg0: Internal.Runnable_): void;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        "tell(java.lang.Object)"(arg0: any): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        tell(arg0: any): void;
        toString(): string;
        executeBlocking(arg0: Internal.Runnable_): void;
        notifyAll(): void;
        getPendingTasksCount(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        name(): string;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSameThread(): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.Runnable>): Internal.CompletableFuture<Source>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get pendingTasksCount(): number
        get sameThread(): boolean
    }
    type ServerChunkCache$MainThreadExecutor_ = ServerChunkCache$MainThreadExecutor;
    class ImmutableList$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        add(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        getClass(): typeof any;
        toString(): string;
        "add(java.lang.Object[])"(arg0: any[]): Internal.ImmutableCollection$Builder<any>;
        "addAll(java.util.Iterator)"(arg0: Internal.Iterator_<E>): this;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addAll(arg0: Internal.Iterator_<E>): this;
        add(arg0: any): Internal.ImmutableCollection$Builder<any>;
        hashCode(): number;
        build(): Internal.ImmutableList<E>;
        wait(): void;
        "addAll(java.lang.Iterable)"(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        wait(arg0: number): void;
        "add(java.lang.Object)"(arg0: any): Internal.ImmutableCollection$Builder<any>;
        equals(arg0: any): boolean;
        addAll(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        get class(): typeof any
    }
    type ImmutableList$Builder_<E> = ImmutableList$Builder<E>;
    abstract class Goal {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        isInterruptable(): boolean;
        start(): void;
        hashCode(): number;
        getFlags(): Internal.EnumSet<Internal.Goal$Flag>;
        wait(): void;
        setFlags(arg0: Internal.EnumSet_<Internal.Goal$Flag>): void;
        stop(): void;
        wait(arg0: number): void;
        abstract canUse(): boolean;
        requiresUpdateEveryTick(): boolean;
        canContinueToUse(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get interruptable(): boolean
        get flags(): Internal.EnumSet<Internal.Goal$Flag>
        set flags(arg0: Internal.EnumSet_<Internal.Goal$Flag>)
    }
    type Goal_ = Goal;
    interface DebugRenderer$SimpleDebugRenderer {
        abstract render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        (arg0: Internal.PoseStack, arg1: Internal.MultiBufferSource, arg2: number, arg3: number, arg4: number): void;
    }
    type DebugRenderer$SimpleDebugRenderer_ = DebugRenderer$SimpleDebugRenderer | ((arg0: Internal.PoseStack, arg1: Internal.MultiBufferSource, arg2: number, arg3: number, arg4: number)=> void);
    class STBTTFontinfo extends Internal.Struct implements Internal.NativeResource {
        constructor(arg0: Internal.ByteBuffer_)
        static create(arg0: number): Internal.STBTTFontinfo$Buffer;
        getClass(): typeof any;
        static validate(arg0: number, arg1: number, arg2: number, arg3: Internal.Struct$StructValidation_): void;
        static malloc(): Internal.STBTTFontinfo;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static calloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static "mallocStack(int)"(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static "callocStack(org.lwjgl.system.MemoryStack)"(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static "calloc(int)"(arg0: number): Internal.STBTTFontinfo$Buffer;
        static "calloc(org.lwjgl.system.MemoryStack)"(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static create(arg0: number): Internal.STBTTFontinfo;
        static create(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        static calloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(): Internal.STBTTFontinfo;
        address(): number;
        static malloc(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static mallocStack(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        toString(): string;
        abstract free(): void;
        notifyAll(): void;
        static create(): Internal.STBTTFontinfo;
        static malloc(arg0: number, arg1: Internal.MemoryStack_): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static callocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        sizeof(): number;
        /**
         * @deprecated
        */
        static mallocStack(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static mallocStack(): Internal.STBTTFontinfo;
        static calloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        hashCode(): number;
        static "malloc(org.lwjgl.system.MemoryStack)"(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        /**
         * @deprecated
        */
        static "callocStack(int)"(arg0: number): Internal.STBTTFontinfo$Buffer;
        static calloc(): Internal.STBTTFontinfo;
        static createSafe(arg0: number, arg1: number): Internal.STBTTFontinfo$Buffer;
        /**
         * @deprecated
        */
        static "mallocStack(org.lwjgl.system.MemoryStack)"(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        static "create(int)"(arg0: number): Internal.STBTTFontinfo$Buffer;
        wait(): void;
        static createSafe(arg0: number): Internal.STBTTFontinfo;
        close(): void;
        clear(): void;
        static malloc(arg0: Internal.MemoryStack_): Internal.STBTTFontinfo;
        wait(arg0: number): void;
        isNull(arg0: number): boolean;
        equals(arg0: any): boolean;
        static "malloc(int)"(arg0: number): Internal.STBTTFontinfo$Buffer;
        static "create(long)"(arg0: number): Internal.STBTTFontinfo;
        get class(): typeof any
        static readonly ALIGNOF: (8) & (number);
        static readonly SIZEOF: (160) & (number);
    }
    type STBTTFontinfo_ = STBTTFontinfo;
    class EnchantedBookItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        static getEnchantments(arg0: Internal.ItemStack_): Internal.ListTag;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        static addEnchantment(arg0: Internal.ItemStack_, arg1: Internal.EnchantmentInstance_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        static createForEnchantment(arg0: Internal.EnchantmentInstance_): Internal.ItemStack;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly TAG_STORED_ENCHANTMENTS: ("StoredEnchantments") & (string);
    }
    type EnchantedBookItem_ = EnchantedBookItem;
    interface LongBinaryOperator {
        abstract applyAsLong(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type LongBinaryOperator_ = ((arg0: number, arg1: number)=> number) | LongBinaryOperator;
    class ForgeGui extends Internal.Gui {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        getMinecraft(): Internal.Minecraft;
        renderSelectedItemName(arg0: Internal.GuiGraphics_): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        renderVignette(arg0: Internal.GuiGraphics_, arg1: Internal.Entity_): void;
        handler$bci000$onRenderEffectsReturn(guiGraphics: Internal.GuiGraphics_, info: Internal.CallbackInfo_): void;
        getBossOverlay(): Internal.BossHealthOverlay;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setupOverlayRenderState(arg0: boolean, arg1: boolean): void;
        renderHotbar(arg0: number, arg1: Internal.GuiGraphics_): void;
        setSubtitle(arg0: net.minecraft.network.chat.Component_): void;
        shouldDrawSurvivalElements(): boolean;
        renderDemoOverlay(arg0: Internal.GuiGraphics_): void;
        setOverlayMessage(arg0: net.minecraft.network.chat.Component_, arg1: boolean): void;
        onDisconnected(): void;
        getChat(): Internal.ChatComponent;
        isShowingChatDisabledByPlayer(): boolean;
        clearCache(): void;
        renderSpyglassOverlay(arg0: Internal.GuiGraphics_, arg1: number): void;
        displayScoreboardSidebar(arg0: Internal.GuiGraphics_, arg1: Internal.Objective_): void;
        toString(): string;
        renderCrosshair(arg0: Internal.GuiGraphics_): void;
        renderHealth(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        renderExperienceBar(arg0: Internal.GuiGraphics_, arg1: number): void;
        notifyAll(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number): void;
        getSpectatorGui(): Internal.SpectatorGui;
        renderJumpMeter(arg0: Internal.PlayerRideableJumping_, arg1: Internal.GuiGraphics_, arg2: number): void;
        renderSelectedItemName(arg0: Internal.GuiGraphics_, arg1: number): void;
        getGuiTicks(): number;
        getFont(): net.minecraft.client.gui.Font;
        hashCode(): number;
        setNowPlaying(arg0: net.minecraft.network.chat.Component_): void;
        setTitle(arg0: net.minecraft.network.chat.Component_): void;
        wait(): void;
        clear(): void;
        tick(arg0: boolean): void;
        wait(arg0: number): void;
        resetTitleTimes(): void;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        equals(arg0: any): boolean;
        handler$bci000$onRenderEffectsEnter(guiGraphics: Internal.GuiGraphics_, info: Internal.CallbackInfo_): void;
        getTabList(): Internal.PlayerTabOverlay;
        renderFood(arg0: number, arg1: number, arg2: Internal.GuiGraphics_): void;
        renderEffects(arg0: Internal.GuiGraphics_): void;
        get class(): typeof any
        get minecraft(): Internal.Minecraft
        get bossOverlay(): Internal.BossHealthOverlay
        set subtitle(arg0: net.minecraft.network.chat.Component_)
        get chat(): Internal.ChatComponent
        get showingChatDisabledByPlayer(): boolean
        get spectatorGui(): Internal.SpectatorGui
        get guiTicks(): number
        get font(): net.minecraft.client.gui.Font
        set nowPlaying(arg0: net.minecraft.network.chat.Component_)
        set title(arg0: net.minecraft.network.chat.Component_)
        set chatDisabledByPlayerShown(arg0: boolean)
        get tabList(): Internal.PlayerTabOverlay
        rightHeight: number;
        static rayTraceDistance: (20.0) & (number);
        leftHeight: number;
    }
    type ForgeGui_ = ForgeGui;
    interface ICookingUpgradeItem {
        abstract getCookingUpgradeConfig(): Internal.CookingUpgradeConfig;
        get cookingUpgradeConfig(): Internal.CookingUpgradeConfig
        (): Internal.CookingUpgradeConfig_;
    }
    type ICookingUpgradeItem_ = (()=> Internal.CookingUpgradeConfig_) | ICookingUpgradeItem;
    abstract class ShortBuffer extends Internal.Buffer implements Internal.Comparable<Internal.ShortBuffer> {
        mismatch(arg0: Internal.ShortBuffer_): number;
        reset(): Internal.Buffer;
        abstract isDirect(): boolean;
        limit(): number;
        put(arg0: number[]): this;
        "put(int,short[])"(arg0: number, arg1: number[]): this;
        notify(): void;
        abstract get(): number;
        compareTo(arg0: any): number;
        abstract order(): Internal.ByteOrder;
        abstract get(arg0: number): number;
        get(arg0: number[]): this;
        abstract "put(short)"(arg0: number): this;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.ShortBuffer;
        put(arg0: Internal.ShortBuffer_): this;
        "put(java.nio.ShortBuffer)"(arg0: Internal.ShortBuffer_): this;
        put(arg0: number, arg1: number[]): this;
        get(arg0: number, arg1: number[]): this;
        position(): number;
        rewind(): this;
        abstract "put(int,short)"(arg0: number, arg1: number): this;
        clear(): this;
        abstract compact(): this;
        "put(int,java.nio.ShortBuffer,int,int)"(arg0: number, arg1: Internal.ShortBuffer_, arg2: number, arg3: number): this;
        wait(): void;
        abstract isReadOnly(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "get(short[])"(arg0: number[]): this;
        getClass(): typeof any;
        abstract put(arg0: number): this;
        capacity(): number;
        abstract asReadOnlyBuffer(): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract slice(): this;
        arrayOffset(): number;
        wait(arg0: number, arg1: number): void;
        position(arg0: number): this;
        limit(arg0: number): this;
        static allocate(arg0: number): Internal.ShortBuffer;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        "put(int,short[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        hasArray(): boolean;
        abstract put(arg0: number, arg1: number): this;
        abstract duplicate(): this;
        "put(short[])"(arg0: number[]): this;
        toString(): string;
        remaining(): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        notifyAll(): void;
        static wrap(arg0: number[]): Internal.ShortBuffer;
        compareTo(arg0: Internal.ShortBuffer_): number;
        array(): number[];
        mark(): Internal.Buffer;
        abstract "get(int)"(arg0: number): number;
        put(arg0: number[], arg1: number, arg2: number): this;
        flip(): this;
        "compareTo(java.nio.ShortBuffer)"(arg0: Internal.ShortBuffer_): number;
        hashCode(): number;
        hasRemaining(): boolean;
        wait(arg0: number): void;
        put(arg0: number, arg1: Internal.ShortBuffer_, arg2: number, arg3: number): this;
        slice(arg0: number, arg1: number): Internal.Buffer;
        equals(arg0: any): boolean;
        get direct(): boolean
        get readOnly(): boolean
        get class(): typeof any
    }
    type ShortBuffer_ = ShortBuffer;
    class GenericStackInv$Mode extends Internal.Enum<Internal.GenericStackInv$Mode> {
        compareTo(arg0: Internal.GenericStackInv$Mode_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.GenericStackInv$Mode;
        static values(): Internal.GenericStackInv$Mode[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(appeng.helpers.externalstorage.GenericStackInv$Mode)"(arg0: Internal.GenericStackInv$Mode_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.GenericStackInv$Mode>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.GenericStackInv$Mode;
        get class(): typeof any
        get declaringClass(): typeof Internal.GenericStackInv$Mode
        static readonly CONFIG_STACKS: (Internal.GenericStackInv$Mode) & (Internal.GenericStackInv$Mode);
        static readonly STORAGE: (Internal.GenericStackInv$Mode) & (Internal.GenericStackInv$Mode);
        static readonly CONFIG_TYPES: (Internal.GenericStackInv$Mode) & (Internal.GenericStackInv$Mode);
    }
    type GenericStackInv$Mode_ = "config_stacks" | "storage" | "config_types" | GenericStackInv$Mode;
    class Ingredient implements Internal.Predicate<Internal.ItemStack>, Internal.IngredientAccessor, Internal.IngredientKJS {
        constructor(arg0: Internal.Stream_<Internal.Ingredient$Value>)
        getDisplayStacks(): Internal.ItemStackSet;
        "test(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        asStack(): InputItem;
        notify(): void;
        toJson(): Internal.JsonElement;
        static "of(net.minecraft.world.level.ItemLike[])"(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        isWildcard(): boolean;
        static "of(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        "or(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): this;
        static create_$md$7ee279$0(arg0: Internal.Stream_<any>): Internal.Ingredient;
        "and(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): this;
        negate(): Internal.Predicate<Internal.ItemStack>;
        subtract(subtracted: Internal.Ingredient_): this;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        "toJson()"(): Internal.JsonElement;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        getValues(): Internal.Ingredient$Value[];
        test(arg0: Internal.ItemStack_): boolean;
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        static create(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        asIngredient(): this;
        getClass(): typeof any;
        isVanilla(): boolean;
        static invalidateAll(): void;
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        or(ingredient: Internal.Ingredient_): this;
        wait(arg0: number, arg1: number): void;
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        static of(): Internal.Ingredient;
        getItemTypes(): Internal.Set<Internal.Item>;
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): this;
        "test(java.lang.Object)"(arg0: any): boolean;
        static "of(java.util.stream.Stream)"(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        self(): this;
        notifyAll(): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        getStackingIds(): Internal.IntList;
        hashCode(): number;
        static "of(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        wait(arg0: number): void;
        getFirst(): Internal.ItemStack;
        equals(arg0: any): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get values(): Internal.Ingredient$Value[]
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get class(): typeof any
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get stackingIds(): Internal.IntList
        get first(): Internal.ItemStack
        static readonly EMPTY: (Internal.Ingredient) & (Internal.Ingredient);
        values: Internal.Ingredient$Value[];
        itemStacks: Internal.ItemStack[];
        stackingIds: Internal.IntList;
    }
    type Ingredient_ = `%${Special.CreativeModeTab}` | {count?: number, item: Internal.ItemStack_} | {ingredient: object} | Internal.ItemStack_ | RegExp | Internal.Ingredient_[] | `@${Special.Mod}` | `%${string}` | Ingredient | Internal.FluidStackJS_ | {fluid: Internal.FluidStackJS_} | `#${Special.ItemTag}` | "*" | {value: object} | {type: Special.Ingredient};
    class ItemBuilder$HurtEnemyContext extends Internal.Record {
        constructor(getItem: Internal.ItemStack_, getTarget: Internal.LivingEntity_, getAttacker: Internal.LivingEntity_)
        getTarget(): Internal.LivingEntity;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getAttacker(): Internal.LivingEntity;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get target(): Internal.LivingEntity
        get class(): typeof any
        get item(): Internal.ItemStack
        get attacker(): Internal.LivingEntity
    }
    type ItemBuilder$HurtEnemyContext_ = ItemBuilder$HurtEnemyContext;
    interface AxeItemAccessor {
        getStrippedBlocks(): Internal.Map<Internal.Block, Internal.Block>;
        get strippedBlocks(): Internal.Map<Internal.Block, Internal.Block>
    }
    type AxeItemAccessor_ = AxeItemAccessor;
    class FilterCountHandler extends Internal.FilterBasicHandler {
        constructor(arg0: number, arg1: Internal.ItemStack_)
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        "getSlotLimit(int)"(arg0: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        setMBAmountInSlot(arg0: number, arg1: number): void;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        wait(): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setStackInSlotSave(arg0: number, arg1: Internal.ItemStack_): void;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        syncSlots(): void;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        get width(): number
        get class(): typeof any
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set size(arg0: number)
    }
    type FilterCountHandler_ = FilterCountHandler;
    interface LongIterable extends Internal.Iterable<number> {
        "forEach(it.unimi.dsi.fastutil.longs.LongConsumer)"(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        iterator(): Internal.Iterator<any>;
        spliterator(): Internal.Spliterator<any>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        longIterator(): Internal.LongIterator;
        longSpliterator(): Internal.LongSpliterator;
        "forEach(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): void;
        forEach(arg0: Internal.LongConsumer_): void;
    }
    type LongIterable_ = LongIterable;
    class FMLCommonSetupEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "enqueueWork(java.util.function.Supplier)"<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        description(): string;
        getResult(): Internal.Event$Result;
        toString(): string;
        enqueueWork<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        notifyAll(): void;
        "enqueueWork(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
    }
    type FMLCommonSetupEvent_ = FMLCommonSetupEvent;
    interface ItemLike {
        abstract asItem(): Internal.Item;
        (): Internal.Item_;
    }
    type ItemLike_ = Internal.Item_ | (()=> Internal.Item_) | ItemLike;
    class BiomeGenerationSettingsBuilder extends Internal.BiomeGenerationSettings$PlainBuilder {
        constructor(arg0: Internal.BiomeGenerationSettings_)
        addFeature(arg0: Internal.GenerationStep$Decoration_, arg1: Internal.Holder_<Internal.PlacedFeature>): Internal.BiomeGenerationSettings$PlainBuilder;
        getClass(): typeof any;
        getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.List<Internal.Holder<Internal.PlacedFeature>>;
        toString(): string;
        getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.List<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        notifyAll(): void;
        addFeature(arg0: number, arg1: Internal.Holder_<Internal.PlacedFeature>): Internal.BiomeGenerationSettings$PlainBuilder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "addFeature(int,net.minecraft.core.Holder)"(arg0: number, arg1: Internal.Holder_<Internal.PlacedFeature>): Internal.BiomeGenerationSettings$PlainBuilder;
        hashCode(): number;
        build(): Internal.BiomeGenerationSettings;
        addCarver(arg0: Internal.GenerationStep$Carving_, arg1: Internal.Holder_<Internal.ConfiguredWorldCarver<any>>): Internal.BiomeGenerationSettings$PlainBuilder;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "addFeature(net.minecraft.world.level.levelgen.GenerationStep$Decoration,net.minecraft.core.Holder)"(arg0: Internal.GenerationStep$Decoration_, arg1: Internal.Holder_<Internal.PlacedFeature>): Internal.BiomeGenerationSettings$PlainBuilder;
        get class(): typeof any
    }
    type BiomeGenerationSettingsBuilder_ = BiomeGenerationSettingsBuilder;
    class TridentLoyaltyEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type TridentLoyaltyEnchantment_ = TridentLoyaltyEnchantment;
    class ArmorItemBuilder$Leggings extends Internal.ArmorItemBuilder {
        constructor(i: ResourceLocation_)
        static toToolTier(o: any): Internal.Tier;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
        */
        subtypes(fn: Internal.Function_<Internal.ItemStack, Internal.Collection<Internal.ItemStack>>): Internal.ItemBuilder;
        createAdditionalObjects(): void;
        createObject(): any;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
        */
        hurtEnemy(context: Internal.Predicate_<Internal.ItemBuilder$HurtEnemyContext>): Internal.ItemBuilder;
        getTranslationKeyGroup(): string;
        notify(): void;
        get(): Internal.Item;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
        */
        unstackable(): Internal.ItemBuilder;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
        */
        finishUsing(finishUsing: Internal.ItemBuilder$FinishUsingCallback_): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
        */
        color(index: number, color: Internal.ItemTintFunction_): Internal.ItemBuilder;
        tier(t: Internal.ArmorMaterial_): Internal.ArmorItemBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Adds an attribute modifier to the item.
         * 
         * An attribute modifier is something like a damage boost or a speed boost.
         * On tools, they're applied when the item is held, on armor, they're
         * applied when the item is worn.
         * @param attribute The resource location of the attribute, e.g. 'generic.attack_damage'
         * @param identifier A unique identifier for the modifier. Modifiers are considered the same if they have the same identifier.
         * @param d The amount of the modifier.
         * @param operation The operation to apply the modifier with. Can be ADDITION, MULTIPLY_BASE, or MULTIPLY_TOTAL.
        */
        modifyAttribute(attribute: ResourceLocation_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): Internal.ItemBuilder;
        /**
         * Sets the item's model (parent).
        */
        parentModel(m: string): Internal.ItemBuilder;
        /**
         * Sets the item's max stack size. Default is 64.
        */
        maxStackSize(v: number): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
        */
        color(callback: Internal.ItemTintFunction_): Internal.ItemBuilder;
        /**
         * Adds a tooltip to the item.
        */
        tooltip(text: net.minecraft.network.chat.Component_): Internal.ItemBuilder;
        "transformObject(net.minecraft.world.item.Item)"(obj: Internal.Item_): Internal.Item;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
        */
        barWidth(barWidth: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the item's rarity.
        */
        rarity(v: Internal.Rarity_): Internal.ItemBuilder;
        /**
         * Makes the item fire resistant like netherite tools.
        */
        fireResistant(): Internal.ItemBuilder;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Determines the animation of the item when used, e.g. eating food.
        */
        useAnimation(animation: Internal.UseAnim_): Internal.ItemBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
        */
        use(use: Internal.ItemBuilder$UseCallback_): Internal.ItemBuilder;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
        */
        releaseUsing(releaseUsing: Internal.ItemBuilder$ReleaseUsingCallback_): Internal.ItemBuilder;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
        */
        containerItem(id: ResourceLocation_): Internal.ItemBuilder;
        wait(): void;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
        */
        burnTime(v: number): Internal.ItemBuilder;
        /**
         * Directlys set the item's texture json.
        */
        textureJson(json: Internal.JsonObject_): Internal.ItemBuilder;
        static toArmorMaterial(o: any): Internal.ArmorMaterial;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
        */
        useDuration(useDuration: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        getClass(): typeof any;
        /**
         * Makes the item fire resistant like netherite tools (or not).
        */
        fireResistant(isFireResistant: boolean): Internal.ItemBuilder;
        modifyTier(callback: Internal.Consumer_<Internal.MutableArmorTier>): Internal.ArmorItemBuilder;
        /**
         * Sets the item's texture by given key.
        */
        texture(key: string, tex: string): Internal.ItemBuilder;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
        */
        maxDamage(v: number): Internal.ItemBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        createItemProperties(): Internal.Item$Properties;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Sets the item's name dynamically.
        */
        name(name: Internal.ItemBuilder$NameCallback_): Internal.ItemBuilder;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
        */
        glow(v: boolean): Internal.ItemBuilder;
        transformObject(arg0: any): any;
        /**
         * Directly set the item's model json.
        */
        modelJson(json: Internal.JsonObject_): Internal.ItemBuilder;
        toString(): string;
        /**
         * Set the food properties of the item.
        */
        food(b: Internal.Consumer_<Internal.FoodBuilder>): Internal.ItemBuilder;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.Item>;
        hashCode(): number;
        /**
         * Sets the item's texture (layer0).
        */
        texture(tex: string): Internal.ItemBuilder;
        transformObject(obj: Internal.Item_): Internal.Item;
        wait(arg0: number): void;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
        */
        barColor(barColor: Internal.Function_<Internal.ItemStack, dev.latvian.mods.rhino.mod.util.color.Color>): Internal.ItemBuilder;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.Item>;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        /**
         * @deprecated
        */
        group(g: string): Internal.ItemBuilder;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
    }
    type ArmorItemBuilder$Leggings_ = ArmorItemBuilder$Leggings;
    class RealmsServer$State extends Internal.Enum<Internal.RealmsServer$State> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RealmsServer$State>>;
        "compareTo(com.mojang.realmsclient.dto.RealmsServer$State)"(arg0: Internal.RealmsServer$State_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.RealmsServer$State[];
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RealmsServer$State;
        compareTo(arg0: Internal.RealmsServer$State_): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.RealmsServer$State;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RealmsServer$State
        static readonly OPEN: (Internal.RealmsServer$State) & (Internal.RealmsServer$State);
        static readonly CLOSED: (Internal.RealmsServer$State) & (Internal.RealmsServer$State);
        static readonly UNINITIALIZED: (Internal.RealmsServer$State) & (Internal.RealmsServer$State);
    }
    type RealmsServer$State_ = RealmsServer$State | "open" | "closed" | "uninitialized";
    interface ItemFiltersStack {
        getInventoryFilterData(): Internal.ItemInventory;
        abstract getItemFiltersData(): any;
        createDataIF(item: Internal.Item_): any;
        getStringValueFilterData(): Internal.StringValueData<any>;
        get inventoryFilterData(): Internal.ItemInventory
        get itemFiltersData(): any
        get stringValueFilterData(): Internal.StringValueData<any>
        (): any;
    }
    type ItemFiltersStack_ = (()=> any) | ItemFiltersStack;
    abstract class ScreenEvent$KeyPressed extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getModifiers(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getKeyCode(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getScanCode(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get screen(): Internal.Screen
        get canceled(): boolean
        get keyCode(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get scanCode(): number
    }
    type ScreenEvent$KeyPressed_ = ScreenEvent$KeyPressed;
    class AccessibleObject implements Internal.AnnotatedElement {
        getClass(): typeof any;
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        setAccessible(arg0: boolean): void;
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        toString(): string;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        notifyAll(): void;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        notify(): void;
        static setAccessible(arg0: Internal.AccessibleObject_[], arg1: boolean): void;
        wait(arg0: number, arg1: number): void;
        canAccess(arg0: any): boolean;
        hashCode(): number;
        wait(): void;
        trySetAccessible(): boolean;
        wait(arg0: number): void;
        getAnnotations(): Internal.Annotation[];
        equals(arg0: any): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        /**
         * @deprecated
        */
        isAccessible(): boolean;
        get class(): typeof any
        set accessible(arg0: boolean)
        get annotations(): Internal.Annotation[]
        get declaredAnnotations(): Internal.Annotation[]
        /**
         * @deprecated
        */
        get accessible(): boolean
    }
    type AccessibleObject_ = AccessibleObject;
    interface CustomTask$Check {
        abstract check(arg0: Internal.CustomTask$Data_, arg1: Internal.ServerPlayer_): void;
        (arg0: Internal.CustomTask$Data, arg1: Internal.ServerPlayer): void;
    }
    type CustomTask$Check_ = ((arg0: Internal.CustomTask$Data, arg1: Internal.ServerPlayer)=> void) | CustomTask$Check;
    class EntityFallenOnBlockCallbackJS extends Internal.EntitySteppedOnBlockCallbackJS {
        constructor(level: Internal.Level_, entity: Internal.Entity_, pos: BlockPos_, state: Internal.BlockState_, fallHeight: number)
        /**
         * Applies fall damage to the entity, multiplier by the multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(multiplier: number): boolean;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        /**
         * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(fallHeight: number, multiplier: number): boolean;
        notify(): void;
        /**
         * Applies default fall damage to the entity.
         * Note this does not force it, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(): boolean;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns the level
        */
        getLevel(): Internal.Level;
        /**
         * Returns if the entity is suppressing bouncing (for players this is true if the player is crouching)
        */
        isSuppressingBounce(): boolean;
        /**
         * Get the height the entity has fallen
        */
        getFallHeight(): number;
        /**
         * Returns the block's position
        */
        getPos(): BlockPos;
        hashCode(): number;
        /**
         * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
         * Note this does not force the damage, so entities that do not take fall damage are not affected.
        */
        applyFallDamage(fallHeight: number, multiplier: number, damageSource: DamageSource_): boolean;
        /**
         * Returns the entity
        */
        getEntity(): Internal.Entity;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        /**
         * Returns the BlockState
        */
        getState(): Internal.BlockState;
        /**
         * Returns the block
        */
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        /**
         * Returns the level
        */
        get level(): Internal.Level
        /**
         * Returns if the entity is suppressing bouncing (for players this is true if the player is crouching)
        */
        get suppressingBounce(): boolean
        /**
         * Get the height the entity has fallen
        */
        get fallHeight(): number
        /**
         * Returns the block's position
        */
        get pos(): BlockPos
        /**
         * Returns the entity
        */
        get entity(): Internal.Entity
        /**
         * Returns the BlockState
        */
        get state(): Internal.BlockState
        /**
         * Returns the block
        */
        get block(): Internal.BlockContainerJS
    }
    type EntityFallenOnBlockCallbackJS_ = EntityFallenOnBlockCallbackJS;
    class SharedSuggestionProvider$TextCoordinates {
        constructor(arg0: string, arg1: string, arg2: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly y: string;
        readonly x: string;
        readonly z: string;
        static readonly DEFAULT_LOCAL: (Internal.SharedSuggestionProvider$TextCoordinates) & (Internal.SharedSuggestionProvider$TextCoordinates);
        static readonly DEFAULT_GLOBAL: (Internal.SharedSuggestionProvider$TextCoordinates) & (Internal.SharedSuggestionProvider$TextCoordinates);
    }
    type SharedSuggestionProvider$TextCoordinates_ = SharedSuggestionProvider$TextCoordinates;
    interface DataSource {
        abstract getData(arg0: Internal.CommandSourceStack_): Internal.Stream<Internal.CompoundTag>;
        (arg0: Internal.CommandSourceStack): Internal.Stream_<Internal.CompoundTag>;
    }
    type DataSource_ = ((arg0: Internal.CommandSourceStack)=> Internal.Stream_<Internal.CompoundTag>) | DataSource;
    interface AccessibleComponent {
        abstract getLocationOnScreen(): Internal.Point;
        abstract getBounds(): Internal.Rectangle;
        abstract contains(arg0: Internal.Point_): boolean;
        abstract setEnabled(arg0: boolean): void;
        abstract setFont(arg0: Internal.Font_): void;
        abstract isFocusTraversable(): boolean;
        abstract isEnabled(): boolean;
        abstract getFontMetrics(arg0: Internal.Font_): Internal.FontMetrics;
        abstract getFont(): Internal.Font;
        abstract getForeground(): Internal.Color;
        abstract getSize(): Internal.Dimension;
        abstract setLocation(arg0: Internal.Point_): void;
        abstract setForeground(arg0: Internal.Color_): void;
        abstract setBounds(arg0: Internal.Rectangle_): void;
        abstract getBackground(): Internal.Color;
        abstract getLocation(): Internal.Point;
        abstract isVisible(): boolean;
        abstract setCursor(arg0: Internal.Cursor_): void;
        abstract requestFocus(): void;
        abstract setSize(arg0: Internal.Dimension_): void;
        abstract isShowing(): boolean;
        abstract getCursor(): Internal.Cursor;
        abstract setBackground(arg0: Internal.Color_): void;
        abstract getAccessibleAt(arg0: Internal.Point_): Internal.Accessible;
        abstract removeFocusListener(arg0: Internal.FocusListener_): void;
        abstract addFocusListener(arg0: Internal.FocusListener_): void;
        abstract setVisible(arg0: boolean): void;
        get locationOnScreen(): Internal.Point
        get bounds(): Internal.Rectangle
        set enabled(arg0: boolean)
        set font(arg0: Internal.Font_)
        get focusTraversable(): boolean
        get enabled(): boolean
        get font(): Internal.Font
        get foreground(): Internal.Color
        get size(): Internal.Dimension
        set location(arg0: Internal.Point_)
        set foreground(arg0: Internal.Color_)
        set bounds(arg0: Internal.Rectangle_)
        get background(): Internal.Color
        get location(): Internal.Point
        get visible(): boolean
        set cursor(arg0: Internal.Cursor_)
        set size(arg0: Internal.Dimension_)
        get showing(): boolean
        get cursor(): Internal.Cursor
        set background(arg0: Internal.Color_)
        set visible(arg0: boolean)
    }
    type AccessibleComponent_ = AccessibleComponent;
    class RecipeNamespace extends Internal.LinkedHashMap<string, Internal.RecipeSchemaType> {
        constructor(name: string)
        replace(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        shaped(id: string): this;
        forEach(arg0: Internal.BiConsumer_<string, Internal.RecipeSchemaType>): void;
        containsValue(arg0: any): boolean;
        merge(arg0: string, arg1: Internal.RecipeSchemaType_, arg2: Internal.BiFunction_<Internal.RecipeSchemaType, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        notify(): void;
        replace(arg0: string, arg1: Internal.RecipeSchemaType_, arg2: Internal.RecipeSchemaType_): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        abstract put(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        computeIfPresent(arg0: string, arg1: Internal.BiFunction_<string, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        wait(): void;
        registerBasic(id: string, ...keys: Internal.RecipeKey_<any>[]): this;
        entrySet(): Internal.Set<Internal.Map$Entry<string, Internal.RecipeSchemaType>>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        static getAll(): Internal.Map<string, Internal.RecipeNamespace>;
        shapeless(id: string): this;
        clone(): any;
        getClass(): typeof any;
        keySet(): Internal.Set<string>;
        static of<K, V>(): Internal.Map<K, V>;
        abstract isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        get(arg0: any): Internal.RecipeSchemaType;
        compute(arg0: string, arg1: Internal.BiFunction_<string, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        abstract containsKey(arg0: any): boolean;
        static getMappedRecipes(): Internal.Map<string, ResourceLocation>;
        putIfAbsent(arg0: string, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        values(): Internal.Collection<Internal.RecipeSchemaType>;
        abstract remove(arg0: any): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        abstract hashCode(): number;
        abstract size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        register(id: string, type: Internal.RecipeSchema_): this;
        abstract putAll(arg0: Internal.Map_<string, Internal.RecipeSchemaType>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        special(id: string): this;
        clear(): void;
        wait(arg0: number): void;
        replaceAll(arg0: Internal.BiFunction_<string, Internal.RecipeSchemaType, Internal.RecipeSchemaType>): void;
        getOrDefault(arg0: any, arg1: Internal.RecipeSchemaType_): Internal.RecipeSchemaType;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        computeIfAbsent(arg0: string, arg1: Internal.Function_<string, Internal.RecipeSchemaType>): Internal.RecipeSchemaType;
        get all(): Internal.Map<string, Internal.RecipeNamespace>
        get class(): typeof any
        get empty(): boolean
        get mappedRecipes(): Internal.Map<string, ResourceLocation>
        readonly name: string;
    }
    type RecipeNamespace_ = RecipeNamespace;
    /**
     * Invoked when the game is starting up and the armor tier registry is being built.
    */
    class ItemArmorTierRegistryEventJS extends Internal.StartupEventJS {
        constructor()
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Adds a new armor tier.
        */
        add(id: string, tier: Internal.Consumer_<Internal.MutableArmorTier>): void;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        /**
         * Adds a new armor tier with a parent tier specified by string.
        */
        add(id: string, parent: string, tier: Internal.Consumer_<Internal.MutableArmorTier>): void;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ItemArmorTierRegistryEventJS_ = ItemArmorTierRegistryEventJS;
    interface WindowFocusListener extends Internal.EventListener {
        abstract windowLostFocus(arg0: Internal.WindowEvent_): void;
        abstract windowGainedFocus(arg0: Internal.WindowEvent_): void;
    }
    type WindowFocusListener_ = WindowFocusListener;
    class WorkableElectricMultiblockMachine extends Internal.WorkableMultiblockMachine implements Internal.IDisplayUIMachine, Internal.IOverclockMachine, Internal.ITieredMachine, Internal.IFancyUIMachine {
        constructor(arg0: Internal.IMachineBlockEntity_, ...arg1: any[])
        setUpwardsFacing(arg0: Internal.Direction_): void;
        getProgress(): number;
        getVoidingMode(): Internal.IVoidable$VoidingMode;
        createMainPage(arg0: Internal.FancyMachineUIWidget_): Widget;
        saveCustomPersistedData(arg0: Internal.CompoundTag_, arg1: boolean): void;
        attachTooltips(arg0: Internal.TooltipsPanel_): void;
        onWorking(): boolean;
        allowFlip(): boolean;
        getRotationState(): RotationState;
        updateModelData(arg0: Internal.ModelData$Builder_): void;
        markDirty(name: string): void;
        fullModifyRecipe(arg0: Internal.GTRecipe_): Internal.GTRecipe;
        canConnectRedstone(arg0: Internal.Direction_): boolean;
        getActiveRecipeType(): number;
        getRealColor(): number;
        getRecipeType(): Internal.GTRecipeType;
        static getMachine(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MetaMachine;
        getTabIcon(): Internal.IGuiTexture;
        allowCircuitSlots(): boolean;
        abstract getPatternLock(): Internal.Lock;
        markDirty(): void;
        getCapabilitiesFlat(arg0: Internal.IO_, arg1: RecipeCapability_<any>): Internal.List<Internal.IRecipeHandler<any>>;
        beforeWorking(arg0: Internal.GTRecipe_): boolean;
        onPaintingColorChanged(arg0: number): void;
        shouldRenderGrid(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ItemStack_, arg4: Internal.Set_<GTToolType>): boolean;
        updateActiveBlocks(arg0: boolean): void;
        onNeighborChanged(arg0: Internal.Block_, arg1: BlockPos_, arg2: boolean): void;
        getPattern(): com.gregtechceu.gtceu.api.pattern.BlockPattern;
        onUse(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        abstract getMultiblockState(): Internal.MultiblockState;
        onLeftClick(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.InteractionHand_, arg3: BlockPos_, arg4: Internal.Direction_): boolean;
        getFluidCapFilter(arg0: Internal.Direction_, arg1: Internal.IO_): Internal.Predicate<Internal.FluidStack>;
        getPartSorter(): Internal.Comparator<Internal.IMultiPart>;
        getUpwardsFacing(): Internal.Direction;
        setCleanroom(arg0: Internal.ICleanroomProvider_): void;
        getCapabilitiesProxy(): Internal.Map<Internal.IO, Internal.List<Internal.RecipeHandlerList>>;
        onToolClick(arg0: Internal.Set_<GTToolType>, arg1: Internal.ItemStack_, arg2: Internal.UseOnContext_): com.mojang.datafixers.util.Pair<GTToolType, Internal.InteractionResult>;
        static getFrontFacing(arg0: Internal.MetaMachine_): Internal.Direction;
        regressWhenWaiting(): boolean;
        addCollisionBoundingBox(arg0: Internal.List_<Internal.VoxelShape>): void;
        getCapabilitiesForIO(arg0: Internal.IO_): Internal.List<Internal.RecipeHandlerList>;
        onStructureInvalid(): void;
        setSuspendAfterFinish(arg0: boolean): void;
        isInValid(): boolean;
        attachConfigurators(arg0: Internal.ConfiguratorPanel_): void;
        getClass(): typeof any;
        canSetIoOnSide(arg0: Internal.Direction_): boolean;
        getFluidHandlerCap(arg0: Internal.Direction_, arg1: boolean): Internal.IFluidHandlerModifiable;
        setActiveRecipeType(arg0: number): void;
        abstract getParts(): Internal.List<Internal.IMultiPart>;
        allowExtendedFacing(): boolean;
        isInvalid(): boolean;
        checkPatternWithLock(): boolean;
        doModifyRecipe(arg0: Internal.GTRecipe_): Internal.GTRecipe;
        setVoidingMode(arg0: Internal.IVoidable$VoidingMode_): void;
        createUI(arg0: Internal.Player_): ModularUI;
        isActive(): boolean;
        getSyncStorage(): Internal.FieldManagedStorage;
        scheduleRenderUpdate(): void;
        subscribeServerTick(arg0: Internal.TickableSubscription_, arg1: Internal.Runnable_): Internal.TickableSubscription;
        setMuffled(arg0: boolean): void;
        getBlockAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getOverclockTier(): number;
        setFlipped(arg0: boolean): void;
        getPageGroupingData(): Internal.IFancyUIProvider$PageGroupingData;
        clearInventory(arg0: Internal.IItemHandlerModifiable_): void;
        getOutputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>;
        isRecipeLogicAvailable(): boolean;
        getDefaultPaintingColor(): number;
        setBatchEnabled(arg0: boolean): void;
        getOffsetTimer(): number;
        abstract isFormed(): boolean;
        toString(): string;
        getFancyTooltipIcon(): Internal.IGuiTexture;
        notifyAll(): void;
        getCapabilitiesFlat(): Internal.Map<Internal.IO, Internal.Map<RecipeCapability<any>, Internal.List<Internal.IRecipeHandler<any>>>>;
        isWorkingEnabled(): boolean;
        hasPlayerInventory(): boolean;
        getItemCapFilter(arg0: Internal.Direction_, arg1: Internal.IO_): Internal.Predicate<Internal.ItemStack>;
        updateSignal(): void;
        getPlayerOwner(): Internal.PlayerOwner;
        getMaxVoltage(): number;
        sideTips(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Set_<GTToolType>, arg4: Internal.Direction_): ResourceTexture;
        setOwnerUUID(arg0: Internal.UUID_): void;
        addHandlerList(arg0: Internal.RecipeHandlerList_): void;
        getAnalogOutputSignal(): number;
        setFrontFacing(arg0: Internal.Direction_): void;
        wait(arg0: number): void;
        afterWorking(): void;
        onPersistedChanged(ref: Internal.IRef_, isDirty: boolean): void;
        tryToOpenUI(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockHitResult_): Internal.InteractionResult;
        getPaintingColor(): number;
        getOwnerUUID(): Internal.UUID;
        getFancyComponent(): Internal.TooltipComponent;
        static getUpwardFacing(arg0: Internal.MetaMachine_): Internal.Direction;
        getSubTabs(): Internal.List<Internal.IFancyUIProvider>;
        getFieldHolder(): Internal.ManagedFieldHolder;
        getTabTooltipComponent(): Internal.TooltipComponent;
        getRecipeTypes(): Internal.GTRecipeType[];
        notify(): void;
        setPaintingColor(arg0: number): void;
        getDefinition(): Internal.MachineDefinition;
        isMuffled(): boolean;
        onRotated(arg0: Internal.Direction_, arg1: Internal.Direction_): void;
        getPos(): BlockPos;
        notifyStatusChanged(arg0: Internal.RecipeLogic$Status_, arg1: Internal.RecipeLogic$Status_): void;
        checkPatternWithTryLock(): boolean;
        unsubscribe(arg0: Internal.TickableSubscription_): void;
        abstract getParallelHatch(): Internal.Optional<Internal.IParallelHatch>;
        getMaxOverclockTier(): number;
        markAsDirty(): void;
        onLoad(): void;
        onAddFancyInformationTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        serverTick(): void;
        static attachConfigurators(arg0: Internal.ConfiguratorPanel_, arg1: Internal.IVoidable_): void;
        getPartAppearance(arg0: Internal.IMultiPart_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: BlockPos_): Internal.BlockState;
        scheduleNeighborShapeUpdate(): void;
        attachSideTabs(arg0: Internal.TabsWidget_): void;
        getOverclockVoltage(): number;
        isFacingValid(arg0: Internal.Direction_): boolean;
        canVoidRecipeOutputs(arg0: RecipeCapability_<any>): boolean;
        keepSubscribing(): boolean;
        getHolder(): Internal.IMachineBlockEntity;
        getBlockState(): Internal.BlockState;
        animateTick(arg0: Internal.RandomSource_): void;
        onSyncChanged(ref: Internal.IRef_, isDirty: boolean): void;
        abstract hasFrontFacing(): boolean;
        getOutputSignal(arg0: Internal.Direction_): number;
        getItemHandlerCap(arg0: Internal.Direction_, arg1: boolean): Internal.IItemHandlerModifiable;
        showFancyTooltip(): boolean;
        getPartPositions(): BlockPos[];
        shouldOpenUI(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockHitResult_): boolean;
        addSyncUpdateListener<T>(name: string, listener: Internal.IFieldUpdateListener_<T>): Internal.ISubscription;
        subscribeServerTick(arg0: Internal.Runnable_): Internal.TickableSubscription;
        wait(): void;
        getTitle(): net.minecraft.network.chat.Component;
        getEnergyContainer(): Internal.EnergyContainerList;
        getFancyTooltip(): Internal.List<net.minecraft.network.chat.Component>;
        onWaiting(): void;
        setOverclockTier(arg0: number): void;
        getMinOverclockTier(): number;
        getTraits(): Internal.List<Internal.MachineTrait>;
        attachTraits(arg0: Internal.MachineTrait_): void;
        handleDisplayClick(arg0: string, arg1: Internal.ClickData_): void;
        getCoverContainer(): Internal.MachineCoverContainer;
        getOutputDirectSignal(arg0: Internal.Direction_): number;
        getCleanroom(): Internal.ICleanroomProvider;
        self(): Internal.MetaMachine;
        loadCustomPersistedData(arg0: Internal.CompoundTag_): void;
        wait(arg0: number, arg1: number): void;
        onStructureFormed(): void;
        getLevel(): Internal.Level;
        onUnload(): void;
        addDebugOverlayText(arg0: Internal.Consumer_<string>): void;
        notifyBlockUpdate(): void;
        isBatchEnabled(): boolean;
        alwaysTryModifyRecipe(): boolean;
        isRemote(): boolean;
        onPartUnload(): void;
        abstract asyncCheckPattern(arg0: number): void;
        onChanged(): void;
        createUIWidget(): Widget;
        setRecipeType(arg0: Internal.GTRecipeType_): void;
        addDisplayText(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        clientTick(): void;
        isGenerator(): boolean;
        getTabTooltips(): Internal.List<net.minecraft.network.chat.Component>;
        getScreenTexture(): Internal.IGuiTexture;
        getRecipeLogic(): Internal.RecipeLogic;
        isSuspendAfterFinish(): boolean;
        getFrontFacing(): Internal.Direction;
        getTier(): number;
        hasCapabilityProxies(): boolean;
        isPainted(): boolean;
        getMaxProgress(): number;
        setWorkingEnabled(arg0: boolean): void;
        getActiveBlocks(): Internal.LongSet;
        shouldAddPartToController(arg0: Internal.IMultiPart_): boolean;
        getOwner(): Internal.MachineOwner;
        hashCode(): number;
        shouldWorkingPlaySound(): boolean;
        getRenderState(): Internal.MachineRenderState;
        setRenderState(arg0: Internal.MachineRenderState_): void;
        tintColor(arg0: number): number;
        equals(arg0: any): boolean;
        checkPattern(): boolean;
        isFlipped(): boolean;
        scheduleRender(fieldName: string, newValue: any, oldValue: any): void;
        set upwardsFacing(arg0: Internal.Direction_)
        get progress(): number
        get voidingMode(): Internal.IVoidable$VoidingMode
        get rotationState(): RotationState
        get activeRecipeType(): number
        get realColor(): number
        get recipeType(): Internal.GTRecipeType
        get tabIcon(): Internal.IGuiTexture
        get patternLock(): Internal.Lock
        get pattern(): com.gregtechceu.gtceu.api.pattern.BlockPattern
        get multiblockState(): Internal.MultiblockState
        get partSorter(): Internal.Comparator<Internal.IMultiPart>
        get upwardsFacing(): Internal.Direction
        set cleanroom(arg0: Internal.ICleanroomProvider_)
        get capabilitiesProxy(): Internal.Map<Internal.IO, Internal.List<Internal.RecipeHandlerList>>
        set suspendAfterFinish(arg0: boolean)
        get inValid(): boolean
        get class(): typeof any
        set activeRecipeType(arg0: number)
        get parts(): Internal.List<Internal.IMultiPart>
        get invalid(): boolean
        set voidingMode(arg0: Internal.IVoidable$VoidingMode_)
        get active(): boolean
        get syncStorage(): Internal.FieldManagedStorage
        set muffled(arg0: boolean)
        get overclockTier(): number
        set flipped(arg0: boolean)
        get pageGroupingData(): Internal.IFancyUIProvider$PageGroupingData
        get outputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>
        get recipeLogicAvailable(): boolean
        get defaultPaintingColor(): number
        set batchEnabled(arg0: boolean)
        get offsetTimer(): number
        get formed(): boolean
        get fancyTooltipIcon(): Internal.IGuiTexture
        get capabilitiesFlat(): Internal.Map<Internal.IO, Internal.Map<RecipeCapability<any>, Internal.List<Internal.IRecipeHandler<any>>>>
        get workingEnabled(): boolean
        get playerOwner(): Internal.PlayerOwner
        get maxVoltage(): number
        set ownerUUID(arg0: Internal.UUID_)
        get analogOutputSignal(): number
        set frontFacing(arg0: Internal.Direction_)
        get paintingColor(): number
        get ownerUUID(): Internal.UUID
        get fancyComponent(): Internal.TooltipComponent
        get subTabs(): Internal.List<Internal.IFancyUIProvider>
        get fieldHolder(): Internal.ManagedFieldHolder
        get tabTooltipComponent(): Internal.TooltipComponent
        get recipeTypes(): Internal.GTRecipeType[]
        set paintingColor(arg0: number)
        get definition(): Internal.MachineDefinition
        get muffled(): boolean
        get pos(): BlockPos
        get parallelHatch(): Internal.Optional<Internal.IParallelHatch>
        get maxOverclockTier(): number
        get overclockVoltage(): number
        get holder(): Internal.IMachineBlockEntity
        get blockState(): Internal.BlockState
        get partPositions(): BlockPos[]
        get title(): net.minecraft.network.chat.Component
        get energyContainer(): Internal.EnergyContainerList
        get fancyTooltip(): Internal.List<net.minecraft.network.chat.Component>
        set overclockTier(arg0: number)
        get minOverclockTier(): number
        get traits(): Internal.List<Internal.MachineTrait>
        get coverContainer(): Internal.MachineCoverContainer
        get cleanroom(): Internal.ICleanroomProvider
        get level(): Internal.Level
        get batchEnabled(): boolean
        get remote(): boolean
        set recipeType(arg0: Internal.GTRecipeType_)
        get generator(): boolean
        get tabTooltips(): Internal.List<net.minecraft.network.chat.Component>
        get screenTexture(): Internal.IGuiTexture
        get recipeLogic(): Internal.RecipeLogic
        get suspendAfterFinish(): boolean
        get frontFacing(): Internal.Direction
        get tier(): number
        get painted(): boolean
        get maxProgress(): number
        set workingEnabled(arg0: boolean)
        get activeBlocks(): Internal.LongSet
        get owner(): Internal.MachineOwner
        get renderState(): Internal.MachineRenderState
        set renderState(arg0: Internal.MachineRenderState_)
        get flipped(): boolean
        static readonly MANAGED_FIELD_HOLDER: (Internal.ManagedFieldHolder) & (Internal.ManagedFieldHolder);
    }
    type WorkableElectricMultiblockMachine_ = WorkableElectricMultiblockMachine;
    class LDFluidPipeType extends Internal.LongDistancePipeType {
        getClass(): typeof any;
        "createNetwork(com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork$WorldData)"(arg0: Internal.LongDistanceNetwork$WorldData_): Internal.LongDistanceNetwork;
        toString(): string;
        notifyAll(): void;
        getMinLength(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "createNetwork(net.minecraft.world.level.Level)"(arg0: Internal.Level_): Internal.LongDistanceNetwork;
        isValidPart(arg0: Internal.ILDNetworkPart_): boolean;
        static getPipeType(arg0: string): Internal.LongDistancePipeType;
        hashCode(): number;
        static item(): Internal.LDItemPipeType;
        createNetwork(arg0: Internal.Level_): Internal.LongDistanceNetwork;
        createNetwork(arg0: Internal.LongDistanceNetwork$WorldData_): Internal.LongDistanceNetwork;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        static fluid(): Internal.LDFluidPipeType;
        equals(arg0: any): boolean;
        satisfiesMinLength(arg0: Internal.ILDEndpoint_, arg1: Internal.ILDEndpoint_): boolean;
        get class(): typeof any
        get minLength(): number
        get name(): string
        static readonly INSTANCE: (Internal.LDFluidPipeType) & (Internal.LDFluidPipeType);
    }
    type LDFluidPipeType_ = LDFluidPipeType;
    interface Vector2ic {
        abstract absolute(arg0: Internal.Vector2i_): Internal.Vector2i;
        abstract maxComponent(): number;
        abstract y(): number;
        abstract div(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract x(): number;
        abstract sub(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract gridDistance(arg0: Internal.Vector2ic_): number;
        abstract "mul(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract add(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract distance(arg0: Internal.Vector2ic_): number;
        abstract get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract equals(arg0: number, arg1: number): boolean;
        abstract mul(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract distanceSquared(arg0: number, arg1: number): number;
        abstract add(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract distance(arg0: number, arg1: number): number;
        abstract div(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract mul(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract negate(arg0: Internal.Vector2i_): Internal.Vector2i;
        abstract "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract gridDistance(arg0: number, arg1: number): number;
        abstract "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract "div(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract mul(arg0: number, arg1: number, arg2: Internal.Vector2i_): Internal.Vector2i;
        abstract getToAddress(arg0: number): this;
        abstract "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract lengthSquared(): number;
        abstract max(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract "mul(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract sub(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract min(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): Internal.Vector2i;
        abstract distanceSquared(arg0: Internal.Vector2ic_): number;
        abstract "get(int)"(arg0: number): number;
        abstract minComponent(): number;
        abstract "div(float,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
    }
    type Vector2ic_ = Vector2ic;
    class GridChunkEvent$GridChunkRemoved extends Internal.GridChunkEvent {
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.ChunkPos_)
        getClass(): typeof any;
        hashCode(): number;
        getLevel(): Internal.ServerLevel;
        getChunkPos(): Internal.ChunkPos;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get level(): Internal.ServerLevel
        get chunkPos(): Internal.ChunkPos
    }
    type GridChunkEvent$GridChunkRemoved_ = GridChunkEvent$GridChunkRemoved;
    class KJSTeamWrapper {
        constructor(team: dev.ftb.mods.ftbteams.api.Team_)
        getClass(): typeof any;
        hashCode(): number;
        isPartyTeam(): boolean;
        toString(): string;
        wait(): void;
        getName(): string;
        notifyAll(): void;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get partyTeam(): boolean
        get name(): string
        get id(): Internal.UUID
    }
    type KJSTeamWrapper_ = KJSTeamWrapper;
    class ServerboundCustomPayloadPacket implements Internal.Packet<Internal.ServerGamePacketListener>, Internal.ICustomPacket<Internal.ServerboundCustomPayloadPacket> {
        constructor(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getData(): Internal.FriendlyByteBuf;
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        getName(): ResourceLocation;
        getIndex(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        getInternalData(): Internal.FriendlyByteBuf;
        getDirection(): Internal.NetworkDirection;
        wait(): void;
        wait(arg0: number): void;
        getThis(): this;
        getIdentifier(): ResourceLocation;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get data(): Internal.FriendlyByteBuf
        get class(): typeof any
        get name(): ResourceLocation
        get index(): number
        get skippable(): boolean
        get internalData(): Internal.FriendlyByteBuf
        get direction(): Internal.NetworkDirection
        get "this"(): Internal.ServerboundCustomPayloadPacket
        get identifier(): ResourceLocation
        static readonly BRAND: (ResourceLocation) & (ResourceLocation);
    }
    type ServerboundCustomPayloadPacket_ = ServerboundCustomPayloadPacket;
    interface ByteChannel extends Internal.ReadableByteChannel, Internal.WritableByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        get open(): boolean
    }
    type ByteChannel_ = ByteChannel;
    class CommonVertexAttribute extends Internal.Enum<Internal.CommonVertexAttribute> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static getCommonType(arg0: Internal.VertexFormatElement_): Internal.CommonVertexAttribute;
        toString(): string;
        compareTo(arg0: Internal.CommonVertexAttribute_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.CommonVertexAttribute;
        getByteLength(): number;
        getDeclaringClass(): typeof Internal.CommonVertexAttribute;
        "compareTo(net.caffeinemc.mods.sodium.api.vertex.attributes.CommonVertexAttribute)"(arg0: Internal.CommonVertexAttribute_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CommonVertexAttribute>>;
        ordinal(): number;
        wait(): void;
        static values(): Internal.CommonVertexAttribute[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get byteLength(): number
        get declaringClass(): typeof Internal.CommonVertexAttribute
        static readonly COLOR: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
        static readonly NORMAL: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
        static readonly POSITION: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
        static readonly LIGHT: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
        static readonly COUNT: (6) & (number);
        static readonly TEXTURE: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
        static readonly OVERLAY: (Internal.CommonVertexAttribute) & (Internal.CommonVertexAttribute);
    }
    type CommonVertexAttribute_ = "normal" | "color" | "position" | "light" | "texture" | CommonVertexAttribute | "overlay";
    class ResourceGenerator {
        constructor(c: Internal.ConsoleJS_, m: Internal.Map_<ResourceLocation, any>)
        getClass(): typeof any;
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>, alwaysForget: boolean): void;
        hashCode(): number;
        json(id: ResourceLocation_, json: Internal.JsonElement_): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        add(id: ResourceLocation_, data: Internal.Supplier_<number[]>): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ResourceGenerator_ = ResourceGenerator;
    class LootPool implements com.gregtechceu.gtceu.core.mixins.LootPoolAccessor, Internal.LootPoolAccessor {
        getClass(): typeof any;
        getEntries(): Internal.LootPoolEntryContainer[];
        getFunctions(): Internal.LootItemFunction[];
        toString(): string;
        static lootPool(): Internal.LootPool$Builder;
        setBonusRolls(arg0: Internal.NumberProvider_): void;
        setRolls(arg0: Internal.NumberProvider_): void;
        notifyAll(): void;
        notify(): void;
        validate(arg0: Internal.ValidationContext_): void;
        isFrozen(): boolean;
        wait(arg0: number, arg1: number): void;
        getBonusRolls(): Internal.NumberProvider;
        addRandomItems(arg0: Internal.Consumer_<Internal.ItemStack>, arg1: Internal.LootContext_): void;
        hashCode(): number;
        setEntries(arg0: Internal.LootPoolEntryContainer_[]): void;
        getConditions(): Internal.LootItemCondition[];
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        getRolls(): Internal.NumberProvider;
        equals(arg0: any): boolean;
        freeze(): void;
        get class(): typeof any
        get entries(): Internal.LootPoolEntryContainer[]
        get functions(): Internal.LootItemFunction[]
        set bonusRolls(arg0: Internal.NumberProvider_)
        set rolls(arg0: Internal.NumberProvider_)
        get frozen(): boolean
        get bonusRolls(): Internal.NumberProvider
        set entries(arg0: Internal.LootPoolEntryContainer_[])
        get conditions(): Internal.LootItemCondition[]
        get name(): string
        get rolls(): Internal.NumberProvider
        readonly conditions: Internal.LootItemCondition[];
        entries: Internal.LootPoolEntryContainer[];
    }
    type LootPool_ = LootPool;
    interface IForgeEntity extends Internal.ICapabilitySerializable<Internal.CompoundTag> {
        abstract canUpdate(arg0: boolean): void;
        abstract isAddedToWorld(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract isInFluidType(): boolean;
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        abstract getEyeInFluidType(): Internal.FluidType;
        abstract canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        abstract canUpdate(): boolean;
        abstract captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getStepHeight(): number;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        abstract getFluidTypeHeight(arg0: Internal.FluidType_): number;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        canRiderInteract(): boolean;
        isMultipartEntity(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        serializeNBT(): Internal.Tag;
        abstract isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        abstract captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        abstract getPersistentData(): Internal.CompoundTag;
        abstract onAddedToWorld(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        canStartSwimming(): boolean;
        abstract onRemovedFromWorld(): void;
        abstract revive(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        abstract getMaxHeightFluidType(): Internal.FluidType;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        get addedToWorld(): boolean
        get inFluidType(): boolean
        get eyeInFluidType(): Internal.FluidType
        get stepHeight(): number
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get persistentData(): Internal.CompoundTag
        get maxHeightFluidType(): Internal.FluidType
    }
    type IForgeEntity_ = IForgeEntity;
    interface IRenderedTankUpgrade {
        abstract setTankRenderInfoUpdateCallback(arg0: Internal.Consumer_<Internal.IRenderedTankUpgrade$TankRenderInfo>): void;
        abstract forceUpdateTankRenderInfo(): void;
        set tankRenderInfoUpdateCallback(arg0: Internal.Consumer_<Internal.IRenderedTankUpgrade$TankRenderInfo>)
    }
    type IRenderedTankUpgrade_ = IRenderedTankUpgrade;
    interface Member {
        abstract getModifiers(): number;
        abstract getName(): string;
        abstract isSynthetic(): boolean;
        abstract getDeclaringClass(): typeof any;
        get modifiers(): number
        get name(): string
        get synthetic(): boolean
        get declaringClass(): typeof any
        readonly PUBLIC: (0) & (number);
        readonly DECLARED: (1) & (number);
    }
    type Member_ = Member;
    class NetworkInterface {
        getClass(): typeof any;
        inetAddresses(): Internal.Stream<Internal.InetAddress>;
        isPointToPoint(): boolean;
        subInterfaces(): Internal.Stream<Internal.NetworkInterface>;
        getMTU(): number;
        getParent(): this;
        getIndex(): number;
        static networkInterfaces(): Internal.Stream<Internal.NetworkInterface>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isVirtual(): boolean;
        isLoopback(): boolean;
        static getByName(arg0: string): Internal.NetworkInterface;
        static getByIndex(arg0: number): Internal.NetworkInterface;
        getDisplayName(): string;
        getName(): string;
        static getByInetAddress(arg0: Internal.InetAddress_): Internal.NetworkInterface;
        getInetAddresses(): Internal.Enumeration<Internal.InetAddress>;
        getHardwareAddress(): number[];
        toString(): string;
        notifyAll(): void;
        getSubInterfaces(): Internal.Enumeration<Internal.NetworkInterface>;
        static getNetworkInterfaces(): Internal.Enumeration<Internal.NetworkInterface>;
        supportsMulticast(): boolean;
        isUp(): boolean;
        hashCode(): number;
        getInterfaceAddresses(): Internal.List<Internal.InterfaceAddress>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get pointToPoint(): boolean
        get MTU(): number
        get parent(): Internal.NetworkInterface
        get index(): number
        get virtual(): boolean
        get loopback(): boolean
        get displayName(): string
        get name(): string
        get inetAddresses(): Internal.Enumeration<Internal.InetAddress>
        get hardwareAddress(): number[]
        get subInterfaces(): Internal.Enumeration<Internal.NetworkInterface>
        get networkInterfaces(): Internal.Enumeration<Internal.NetworkInterface>
        get up(): boolean
        get interfaceAddresses(): Internal.List<Internal.InterfaceAddress>
    }
    type NetworkInterface_ = NetworkInterface;
    interface IExhaustVentMachine extends Internal.IMachineFeature {
        abstract setNeedsVenting(arg0: boolean): void;
        abstract isNeedsVenting(): boolean;
        tryDoVenting(arg0: Internal.Level_, arg1: BlockPos_): void;
        abstract getVentingDamage(): number;
        playVentingSound(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number): void;
        abstract getVentingDirection(): Internal.Direction;
        abstract markVentingComplete(): void;
        doVentingDamage(arg0: Internal.Level_, arg1: BlockPos_): void;
        checkVenting(): boolean;
        isVentingBlocked(): boolean;
        createVentingParticles(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number): void;
        self(): Internal.MetaMachine;
        set needsVenting(arg0: boolean)
        get needsVenting(): boolean
        get ventingDamage(): number
        get ventingDirection(): Internal.Direction
        get ventingBlocked(): boolean
        readonly VENT_DIRECTION_PROPERTY: Internal.EnumProperty<Internal.RelativeDirection>;
    }
    type IExhaustVentMachine_ = IExhaustVentMachine;
    abstract class ColorType extends Internal.Enum<Internal.ColorType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        abstract getBrightest(): number;
        static values(): Internal.ColorType[];
        toString(): string;
        getDeclaringClass(): typeof Internal.ColorType;
        "compareTo(team.creative.creativecore.common.util.type.ColorType)"(arg0: Internal.ColorType_): number;
        static valueOf(arg0: string): Internal.ColorType;
        notifyAll(): void;
        compareTo(arg0: Internal.ColorType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ColorType>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get brightest(): number
        get declaringClass(): typeof Internal.ColorType
        static readonly RED: Internal.ColorType;
        static readonly GREEN: Internal.ColorType;
        static readonly BLUE: Internal.ColorType;
        static readonly ALPHA: Internal.ColorType;
    }
    type ColorType_ = "alpha" | "red" | ColorType | "blue" | "green";
    class FluidTransferHelper {
        constructor()
        getClass(): typeof any;
        static getContainerItem(copyContainer: ItemStackTransfer_, handler: Internal.IFluidTransfer_): Internal.ItemStack;
        static interactWithFluidHandler(player: Internal.Player_, hand: Internal.InteractionHand_, handler: Internal.IFluidTransfer_): boolean;
        static transferFluids(sourceHandler: Internal.IFluidTransfer_, destHandler: Internal.IFluidTransfer_, transferLimit: number, fluidFilter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>): number;
        static tryPlaceFluid(player: Internal.Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, container: Internal.ItemStack_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): Internal.FluidActionResult;
        static tryFluidTransfer(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, maxAmount: number, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static "tryFluidTransfer(com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer,com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer,com.lowdragmc.lowdraglib.side.fluid.FluidStack,boolean)"(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static getFluidContained(container: Internal.ItemStack_): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static tryFillContainer(container: Internal.ItemStack_, fluidSource: Internal.IFluidTransfer_, maxAmount: number, player: Internal.Player_, doFill: boolean): Internal.FluidActionResult;
        static tryEmptyContainerAndStow(container: Internal.ItemStack_, fluidDestination: Internal.IFluidTransfer_, inventory: Internal.IItemTransfer_, maxAmount: number, player: Internal.Player_, doDrain: boolean): Internal.FluidActionResult;
        notify(): void;
        static tryFluidTransfer(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static getFluidTransfer(player: Internal.Player_, slot: number): Internal.IFluidTransfer;
        wait(arg0: number, arg1: number): void;
        static importToTarget(target: Internal.IFluidTransfer_, maxAmount: number, filter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): void;
        static "getFluidTransfer(com.lowdragmc.lowdraglib.side.item.IItemTransfer,int)"(itemTransfer: Internal.IItemTransfer_, slot: number): Internal.IFluidTransfer;
        static interactWithFluidHandler(player: Internal.Player_, hand: Internal.InteractionHand_, level: Internal.Level_, pos: BlockPos_, side: Internal.Direction_): boolean;
        static "tryPlaceFluid(net.minecraft.world.entity.player.Player,net.minecraft.world.level.Level,net.minecraft.world.InteractionHand,net.minecraft.core.BlockPos,net.minecraft.world.item.ItemStack,com.lowdragmc.lowdraglib.side.fluid.FluidStack)"(player: Internal.Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, container: Internal.ItemStack_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): Internal.FluidActionResult;
        /**
         * @deprecated
        */
        static getFluidTransfer(itemStack: Internal.ItemStack_): Internal.IFluidTransfer;
        static "tryPlaceFluid(net.minecraft.world.entity.player.Player,net.minecraft.world.level.Level,net.minecraft.world.InteractionHand,net.minecraft.core.BlockPos,com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer,com.lowdragmc.lowdraglib.side.fluid.FluidStack)"(player: Internal.Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        static exportToTarget(source: Internal.IFluidTransfer_, maxAmount: number, filter: Internal.Predicate_<com.lowdragmc.lowdraglib.side.fluid.FluidStack>, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): void;
        toString(): string;
        static tryPlaceFluid(player: Internal.Player_, level: Internal.Level_, hand: Internal.InteractionHand_, pos: BlockPos_, fluidSource: Internal.IFluidTransfer_, resource: com.lowdragmc.lowdraglib.side.fluid.FluidStack_): boolean;
        notifyAll(): void;
        static "getFluidTransfer(net.minecraft.world.entity.player.Player,net.minecraft.world.inventory.AbstractContainerMenu)"(player: Internal.Player_, screenHandler: Internal.AbstractContainerMenu_): Internal.IFluidTransfer;
        static getFluidTransfer(level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_): Internal.IFluidTransfer;
        static "tryFluidTransfer(com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer,com.lowdragmc.lowdraglib.side.fluid.IFluidTransfer,int,boolean)"(fluidDestination: Internal.IFluidTransfer_, fluidSource: Internal.IFluidTransfer_, maxAmount: number, doTransfer: boolean): com.lowdragmc.lowdraglib.side.fluid.FluidStack;
        static tryEmptyContainer(container: Internal.ItemStack_, fluidDestination: Internal.IFluidTransfer_, maxAmount: number, player: Internal.Player_, doDrain: boolean): Internal.FluidActionResult;
        static "getFluidTransfer(net.minecraft.world.entity.player.Player,int)"(player: Internal.Player_, slot: number): Internal.IFluidTransfer;
        static "getFluidTransfer(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand)"(player: Internal.Player_, hand: Internal.InteractionHand_): Internal.IFluidTransfer;
        static tryPickUpFluid(emptyContainer: Internal.ItemStack_, playerIn: Internal.Player_, level: Internal.Level_, pos: BlockPos_, side: Internal.Direction_): Internal.FluidActionResult;
        static getFluidTransfer(itemTransfer: Internal.IItemTransfer_, slot: number): Internal.IFluidTransfer;
        static destroyBlockOnFluidPlacement(level: Internal.Level_, pos: BlockPos_): void;
        hashCode(): number;
        static getFluidTransfer(player: Internal.Player_, hand: Internal.InteractionHand_): Internal.IFluidTransfer;
        wait(): void;
        wait(arg0: number): void;
        static getFluidTransfer(player: Internal.Player_, screenHandler: Internal.AbstractContainerMenu_): Internal.IFluidTransfer;
        equals(arg0: any): boolean;
        static tryFillContainerAndStow(container: Internal.ItemStack_, fluidSource: Internal.IFluidTransfer_, inventory: Internal.IItemTransfer_, maxAmount: number, player: Internal.Player_, doFill: boolean): Internal.FluidActionResult;
        get class(): typeof any
    }
    type FluidTransferHelper_ = FluidTransferHelper;
    class TreeConfiguration implements Internal.FeatureConfiguration {
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly minimumSize: Internal.FeatureSize;
        readonly dirtProvider: Internal.BlockStateProvider;
        readonly forceDirt: boolean;
        static readonly CODEC: Internal.Codec<Internal.TreeConfiguration>;
        readonly foliageProvider: Internal.BlockStateProvider;
        readonly rootPlacer: Internal.Optional<Internal.RootPlacer>;
        readonly trunkProvider: Internal.BlockStateProvider;
        readonly foliagePlacer: Internal.FoliagePlacer;
        readonly trunkPlacer: Internal.TrunkPlacer;
        readonly decorators: Internal.List<Internal.TreeDecorator>;
        readonly ignoreVines: boolean;
    }
    type TreeConfiguration_ = TreeConfiguration;
    interface Int2IntMap$Entry extends Internal.Map$Entry<number, number> {
        /**
         * @deprecated
        */
        getKey(): any;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        /**
         * @deprecated
        */
        getValue(): any;
        abstract "setValue(int)"(arg0: number): number;
        abstract setValue(arg0: number): number;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        /**
         * @deprecated
        */
        "setValue(java.lang.Integer)"(arg0: number): number;
        abstract getIntKey(): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        "setValue(java.lang.Object)"(arg0: any): any;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getIntValue(): number;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get key(): any
        /**
         * @deprecated
        */
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: any)
        /**
         * @deprecated
        */
        get value(): any
        set "value(int)"(arg0: number)
        set value(arg0: number)
        /**
         * @deprecated
        */
        set "value(java.lang.Integer)"(arg0: number)
        get intKey(): number
        /**
         * @deprecated
        */
        set "value(java.lang.Object)"(arg0: any)
        get intValue(): number
    }
    type Int2IntMap$Entry_ = Int2IntMap$Entry;
    class EnergyGeneratorBlock extends Internal.AEBaseEntityBlock<Internal.EnergyGeneratorBlockEntity> {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static fixtureProps(): Internal.BlockBehaviour$Properties;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getOrientationStrategy(): Internal.IOrientationStrategy;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        onActivated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntityType(): Internal.BlockEntityType<Internal.EnergyGeneratorBlockEntity>;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static metalProps(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.EnergyGeneratorBlockEntity;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static stoneProps(): Internal.BlockBehaviour$Properties;
        static glassProps(): Internal.BlockBehaviour$Properties;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.EnergyGeneratorBlockEntity;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        setBlockEntity(arg0: typeof Internal.EnergyGeneratorBlockEntity, arg1: Internal.BlockEntityType_<Internal.EnergyGeneratorBlockEntity>, arg2: Internal.BlockEntityTicker_<Internal.EnergyGeneratorBlockEntity>, arg3: Internal.BlockEntityTicker_<Internal.EnergyGeneratorBlockEntity>): void;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRegistryName(): ResourceLocation;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get orientationStrategy(): Internal.IOrientationStrategy
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get blockEntityType(): Internal.BlockEntityType<Internal.EnergyGeneratorBlockEntity>
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type EnergyGeneratorBlock_ = EnergyGeneratorBlock;
    abstract class AbstractButton extends Internal.AbstractWidget {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: net.minecraft.network.chat.Component_)
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        getY(): number;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        getTooltip(): Internal.Tooltip;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        setX(arg0: number): void;
        clearFGColor(): void;
        setAlpha(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        isHovered(): boolean;
        getWidth(): number;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        abstract onPress(): void;
        wait(): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setMessage(arg0: net.minecraft.network.chat.Component_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        getX(): number;
        isActive(): boolean;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        setTooltipDelay(arg0: number): void;
        getMessage(): net.minecraft.network.chat.Component;
        setY(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        toString(): string;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        renderString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: number): void;
        playDownSound(arg0: Internal.SoundManager_): void;
        hashCode(): number;
        static wrapDefaultNarrationMessage(arg0: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        wait(arg0: number): void;
        setHeight(arg0: number): void;
        equals(arg0: any): boolean;
        get y(): number
        set focused(arg0: boolean)
        get tooltip(): Internal.Tooltip
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get hoveredOrFocused(): boolean
        set message(arg0: net.minecraft.network.chat.Component_)
        get class(): typeof any
        get focused(): boolean
        get x(): number
        get active(): boolean
        get tabOrderGroup(): number
        set tooltipDelay(arg0: number)
        get message(): net.minecraft.network.chat.Component
        set y(arg0: number)
        set width(arg0: number)
        get height(): number
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
    }
    type AbstractButton_ = AbstractButton;
    class ModifiableStructureInfo$StructureInfo$Builder {
        getClass(): typeof any;
        build(): Internal.ModifiableStructureInfo$StructureInfo;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getStructureSettings(): Internal.StructureSettingsBuilder;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static copyOf(arg0: Internal.ModifiableStructureInfo$StructureInfo_): Internal.ModifiableStructureInfo$StructureInfo$Builder;
        get class(): typeof any
        get structureSettings(): Internal.StructureSettingsBuilder
    }
    type ModifiableStructureInfo$StructureInfo$Builder_ = ModifiableStructureInfo$StructureInfo$Builder;
    class JobAttributes$DestinationType extends Internal.AttributeValue {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly FILE: (Internal.JobAttributes$DestinationType) & (Internal.JobAttributes$DestinationType);
        static readonly PRINTER: (Internal.JobAttributes$DestinationType) & (Internal.JobAttributes$DestinationType);
    }
    type JobAttributes$DestinationType_ = JobAttributes$DestinationType;
    abstract class RenderTarget {
        constructor(arg0: boolean)
        getClass(): typeof any;
        getColorTextureId(): number;
        blitToScreen(arg0: number, arg1: number): void;
        setFilterMode(arg0: number): void;
        unbindRead(): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        destroyBuffers(): void;
        bindWrite(arg0: boolean): void;
        getDepthTextureId(): number;
        copyDepthFrom(arg0: Internal.RenderTarget_): void;
        clear(arg0: boolean): void;
        toString(): string;
        bindRead(): void;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        unbindWrite(): void;
        notifyAll(): void;
        enableStencil(): void;
        hashCode(): number;
        checkStatus(): void;
        wait(): void;
        isStencilEnabled(): boolean;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get colorTextureId(): number
        set filterMode(arg0: number)
        get depthTextureId(): number
        get stencilEnabled(): boolean
        width: number;
        readonly useDepth: boolean;
        filterMode: number;
        height: number;
        frameBufferId: number;
        viewHeight: number;
        viewWidth: number;
    }
    type RenderTarget_ = RenderTarget;
    class LongArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.LongArgumentType> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        type(): Internal.ArgumentTypeInfo<Internal.LongArgumentType, any>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type LongArgumentInfo$Template_ = LongArgumentInfo$Template;
    /**
     * @deprecated
    */
    class FullscreenDisplayEvent$CustomToolbarEvent extends net.minecraftforge.eventbus.api.Event {
        constructor(arg0: Internal.IFullscreen_, arg1: Internal.CustomToolBarBuilder_)
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        getFullscreen(): Internal.IFullscreen;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getCustomToolBarBuilder(): Internal.CustomToolBarBuilder;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get fullscreen(): Internal.IFullscreen
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get customToolBarBuilder(): Internal.CustomToolBarBuilder
    }
    type FullscreenDisplayEvent$CustomToolbarEvent_ = FullscreenDisplayEvent$CustomToolbarEvent;
    class NetherFortressStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly FORTRESS_ENEMIES: Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        static readonly CODEC: Internal.Codec<Internal.NetherFortressStructure>;
    }
    type NetherFortressStructure_ = NetherFortressStructure;
    class KelpBlock extends Internal.GrowingPlantHeadBlock implements Internal.LiquidBlockContainer {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        gtceu$getGrowthDirection(): Internal.Direction;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        isMaxAge(arg0: Internal.BlockState_): boolean;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "getStateForPlacement(net.minecraft.world.level.LevelAccessor)"(arg0: Internal.LevelAccessor_): Internal.BlockState;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        gtceu$getHeadBlock(): Internal.GrowingPlantHeadBlock;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getMaxAgeState(arg0: Internal.BlockState_): Internal.BlockState;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        gtceu$getBodyBlock(): Internal.Block;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        "getStateForPlacement(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type KelpBlock_ = KelpBlock;
    abstract class Biome$TemperatureModifier extends Internal.Enum<Internal.Biome$TemperatureModifier> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf(arg0: string): Internal.Biome$TemperatureModifier;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.Biome$TemperatureModifier_): number;
        getName(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Biome$TemperatureModifier>>;
        "compareTo(net.minecraft.world.level.biome.Biome$TemperatureModifier)"(arg0: Internal.Biome$TemperatureModifier_): number;
        abstract modifyTemperature(arg0: BlockPos_, arg1: number): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.Biome$TemperatureModifier[];
        name(): string;
        getDeclaringClass(): typeof Internal.Biome$TemperatureModifier;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get name(): string
        get declaringClass(): typeof Internal.Biome$TemperatureModifier
        static readonly FROZEN: Internal.Biome$TemperatureModifier;
        static readonly NONE: Internal.Biome$TemperatureModifier;
        static readonly CODEC: Internal.Codec<Internal.Biome$TemperatureModifier>;
    }
    type Biome$TemperatureModifier_ = "frozen" | Biome$TemperatureModifier | "none";
    abstract class AbstractReferenceCountedByteBuf extends Internal.AbstractByteBuf {
        indexOf(arg0: number, arg1: number, arg2: number): number;
        abstract getBytes(arg0: number, arg1: Internal.OutputStream_, arg2: number): Internal.ByteBuf;
        readShortLE(): number;
        writeInt(arg0: number): Internal.ByteBuf;
        readDouble(): number;
        skipBytes(arg0: number): Internal.ByteBuf;
        markReaderIndex(): Internal.ByteBuf;
        markWriterIndex(): Internal.ByteBuf;
        getShortLE(arg0: number): number;
        "writeBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        isReadable(arg0: number): boolean;
        resetWriterIndex(): Internal.ByteBuf;
        abstract getBytes(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        readUnsignedMedium(): number;
        writeBytes(arg0: Internal.InputStream_, arg1: number): number;
        compareTo(arg0: Internal.ByteBuf_): number;
        touch(arg0: any): Internal.ReferenceCounted;
        readUnsignedMediumLE(): number;
        writeIntLE(arg0: number): Internal.ByteBuf;
        setMediumLE(arg0: number, arg1: number): Internal.ByteBuf;
        slice(): Internal.ByteBuf;
        writeMedium(arg0: number): Internal.ByteBuf;
        abstract copy(arg0: number, arg1: number): Internal.ByteBuf;
        resetReaderIndex(): Internal.ByteBuf;
        release(): boolean;
        readByte(): number;
        readBytes(arg0: number[]): Internal.ByteBuf;
        getClass(): typeof any;
        writerIndex(arg0: number): Internal.ByteBuf;
        isContiguous(): boolean;
        abstract arrayOffset(): number;
        retainedSlice(arg0: number, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        abstract nioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        getUnsignedInt(arg0: number): number;
        getUnsignedMedium(arg0: number): number;
        getUnsignedMediumLE(arg0: number): number;
        maxCapacity(): number;
        getCharSequence(arg0: number, arg1: number, arg2: Internal.Charset_): Internal.CharSequence;
        clear(): Internal.ByteBuf;
        readMedium(): number;
        abstract unwrap(): Internal.ByteBuf;
        retain(): Internal.ReferenceCounted;
        writeBytes(arg0: number[]): Internal.ByteBuf;
        wait(arg0: number): void;
        "writeBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        "compareTo(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): number;
        discardReadBytes(): Internal.ByteBuf;
        writeChar(arg0: number): Internal.ByteBuf;
        duplicate(): Internal.ByteBuf;
        getDouble(arg0: number): number;
        abstract capacity(arg0: number): Internal.ByteBuf;
        readUnsignedInt(): number;
        abstract isDirect(): boolean;
        writeDouble(arg0: number): Internal.ByteBuf;
        getUnsignedIntLE(arg0: number): number;
        abstract "getBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        readChar(): string;
        setInt(arg0: number, arg1: number): Internal.ByteBuf;
        bytesBefore(arg0: number, arg1: number, arg2: number): number;
        "readBytes(java.nio.channels.GatheringByteChannel,int)"(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        asByteBuf(): Internal.ByteBuf;
        isWritable(arg0: number): boolean;
        abstract alloc(): Internal.ByteBufAllocator;
        "writeBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        readInt(): number;
        abstract nioBuffers(arg0: number, arg1: number): Internal.ByteBuffer[];
        setChar(arg0: number, arg1: number): Internal.ByteBuf;
        abstract "getBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        writeBytes(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        getLong(arg0: number): number;
        wait(): void;
        readerIndex(arg0: number): Internal.ByteBuf;
        abstract "setBytes(int,java.nio.channels.ScatteringByteChannel,int)"(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        "readBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        writeDoubleLE(arg0: number): Internal.ByteBuf;
        abstract getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        "setBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        asReadOnly(): Internal.ByteBuf;
        abstract hasMemoryAddress(): boolean;
        setZero(arg0: number, arg1: number): Internal.ByteBuf;
        readLongLE(): number;
        getShort(arg0: number): number;
        writeLong(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        readUnsignedIntLE(): number;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        getInt(arg0: number): number;
        getBytes(arg0: number, arg1: number[]): Internal.ByteBuf;
        writeBytes(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        abstract "setBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        setMedium(arg0: number, arg1: number): Internal.ByteBuf;
        writeByte(arg0: number): Internal.ByteBuf;
        "readBytes(java.io.OutputStream,int)"(arg0: Internal.OutputStream_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        ensureWritable(arg0: number, arg1: boolean): number;
        "readBytes(io.netty.buffer.ByteBuf)"(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        getUnsignedShort(arg0: number): number;
        setDouble(arg0: number, arg1: number): Internal.ByteBuf;
        abstract getBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        readUnsignedByte(): number;
        "getBytes(int,byte[])"(arg0: number, arg1: number[]): Internal.ByteBuf;
        abstract "getBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        getUnsignedShortLE(arg0: number): number;
        "writeBytes(java.nio.channels.FileChannel,long,int)"(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        equals(arg0: any): boolean;
        toString(arg0: number, arg1: number, arg2: Internal.Charset_): string;
        readableBytes(): number;
        abstract "setBytes(int,java.nio.channels.FileChannel,long,int)"(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        abstract "setBytes(int,byte[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        maxFastWritableBytes(): number;
        forEachByteDesc(arg0: Internal.ByteProcessor_): number;
        abstract nioBufferCount(): number;
        nioBuffers(): Internal.ByteBuffer[];
        writeBytes(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        writeFloat(arg0: number): Internal.ByteBuf;
        getFloat(arg0: number): number;
        abstract setBytes(arg0: number, arg1: Internal.FileChannel_, arg2: number, arg3: number): number;
        "setBytes(int,byte[])"(arg0: number, arg1: number[]): Internal.ByteBuf;
        setFloat(arg0: number, arg1: number): Internal.ByteBuf;
        abstract memoryAddress(): number;
        ensureWritable(arg0: number): Internal.ByteBuf;
        forEachByte(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        getMediumLE(arg0: number): number;
        maxWritableBytes(): number;
        isReadable(): boolean;
        readIntLE(): number;
        writeShort(arg0: number): Internal.ByteBuf;
        getByte(arg0: number): number;
        getMedium(arg0: number): number;
        bytesBefore(arg0: number, arg1: number): number;
        "writeBytes(java.io.InputStream,int)"(arg0: Internal.InputStream_, arg1: number): number;
        retain(arg0: number): Internal.ReferenceCounted;
        readBoolean(): boolean;
        setCharSequence(arg0: number, arg1: Internal.CharSequence_, arg2: Internal.Charset_): number;
        isReadOnly(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        writeLongLE(arg0: number): Internal.ByteBuf;
        setDoubleLE(arg0: number, arg1: number): Internal.ByteBuf;
        writeCharSequence(arg0: Internal.CharSequence_, arg1: Internal.Charset_): number;
        getBytes(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        readUnsignedShort(): number;
        forEachByteDesc(arg0: number, arg1: number, arg2: Internal.ByteProcessor_): number;
        release(arg0: number): boolean;
        writeMediumLE(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        forEachByte(arg0: Internal.ByteProcessor_): number;
        writeBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        setLongLE(arg0: number, arg1: number): Internal.ByteBuf;
        getUnsignedByte(arg0: number): number;
        writeBytes(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        "readBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        "readBytes(io.netty.buffer.ByteBuf,int)"(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        readBytes(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        retainedSlice(): Internal.ByteBuf;
        setShort(arg0: number, arg1: number): Internal.ByteBuf;
        "readBytes(byte[])"(arg0: number[]): Internal.ByteBuf;
        toString(): string;
        "writeBytes(io.netty.buffer.ByteBuf,int,int)"(arg0: Internal.ByteBuf_, arg1: number, arg2: number): Internal.ByteBuf;
        readDoubleLE(): number;
        getBoolean(arg0: number): boolean;
        notifyAll(): void;
        "readBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        writeZero(arg0: number): Internal.ByteBuf;
        "writeBytes(java.nio.channels.ScatteringByteChannel,int)"(arg0: Internal.ScatteringByteChannel_, arg1: number): number;
        nioBuffer(): Internal.ByteBuffer;
        readBytes(arg0: Internal.FileChannel_, arg1: number, arg2: number): number;
        readUnsignedShortLE(): number;
        abstract internalNioBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        abstract setBytes(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        getFloatLE(arg0: number): number;
        isWritable(): boolean;
        readerIndex(): number;
        "readBytes(int)"(arg0: number): Internal.ByteBuf;
        setByte(arg0: number, arg1: number): Internal.ByteBuf;
        readBytes(arg0: Internal.GatheringByteChannel_, arg1: number): number;
        writerIndex(): number;
        retainedDuplicate(): Internal.ByteBuf;
        abstract getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        "readBytes(byte[],int,int)"(arg0: number[], arg1: number, arg2: number): Internal.ByteBuf;
        touch(): Internal.ByteBuf;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        notify(): void;
        "writeBytes(byte[])"(arg0: number[]): Internal.ByteBuf;
        setShortLE(arg0: number, arg1: number): Internal.ByteBuf;
        compareTo(arg0: any): number;
        setFloatLE(arg0: number, arg1: number): Internal.ByteBuf;
        setLong(arg0: number, arg1: number): Internal.ByteBuf;
        readMediumLE(): number;
        writableBytes(): number;
        writeFloatLE(arg0: number): Internal.ByteBuf;
        /**
         * @deprecated
        */
        abstract order(): Internal.ByteOrder;
        getChar(arg0: number): string;
        writeBytes(arg0: Internal.ByteBuf_, arg1: number): Internal.ByteBuf;
        "writeBytes(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuf;
        "getBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): Internal.ByteBuf;
        discardSomeReadBytes(): Internal.ByteBuf;
        bytesBefore(arg0: number): number;
        abstract "getBytes(int,java.io.OutputStream,int)"(arg0: number, arg1: Internal.OutputStream_, arg2: number): Internal.ByteBuf;
        readRetainedSlice(arg0: number): Internal.ByteBuf;
        setBytes(arg0: number, arg1: number[]): Internal.ByteBuf;
        "setBytes(int,io.netty.buffer.ByteBuf,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number): Internal.ByteBuf;
        readFloatLE(): number;
        writeShortLE(arg0: number): Internal.ByteBuf;
        abstract array(): number[];
        readShort(): number;
        getIntLE(arg0: number): number;
        readBytes(arg0: Internal.OutputStream_, arg1: number): Internal.ByteBuf;
        slice(arg0: number, arg1: number): Internal.ByteBuf;
        abstract setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): Internal.ByteBuf;
        abstract capacity(): number;
        readCharSequence(arg0: number, arg1: Internal.Charset_): Internal.CharSequence;
        "getBytes(int,io.netty.buffer.ByteBuf)"(arg0: number, arg1: Internal.ByteBuf_): Internal.ByteBuf;
        getBytes(arg0: number, arg1: Internal.ByteBuf_, arg2: number): Internal.ByteBuf;
        getLongLE(arg0: number): number;
        readSlice(arg0: number): Internal.ByteBuf;
        wait(arg0: number, arg1: number): void;
        abstract "setBytes(int,java.io.InputStream,int)"(arg0: number, arg1: Internal.InputStream_, arg2: number): number;
        abstract "getBytes(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        readFloat(): number;
        getDoubleLE(arg0: number): number;
        writeBoolean(arg0: boolean): Internal.ByteBuf;
        setIndex(arg0: number, arg1: number): Internal.ByteBuf;
        abstract hasArray(): boolean;
        setBoolean(arg0: number, arg1: boolean): Internal.ByteBuf;
        writeBytes(arg0: Internal.ByteBuf_): Internal.ByteBuf;
        abstract setBytes(arg0: number, arg1: Internal.ScatteringByteChannel_, arg2: number): number;
        readLong(): number;
        copy(): Internal.ByteBuf;
        abstract "getBytes(int,java.nio.channels.GatheringByteChannel,int)"(arg0: number, arg1: Internal.GatheringByteChannel_, arg2: number): number;
        readBytes(arg0: number): Internal.ByteBuf;
        refCnt(): number;
        setIntLE(arg0: number, arg1: number): Internal.ByteBuf;
        abstract "setBytes(int,io.netty.buffer.ByteBuf,int,int)"(arg0: number, arg1: Internal.ByteBuf_, arg2: number, arg3: number): Internal.ByteBuf;
        hashCode(): number;
        toString(arg0: Internal.Charset_): string;
        order(arg0: Internal.ByteOrder_): Internal.ByteBuf;
        abstract setBytes(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuf;
        get class(): typeof any
        get contiguous(): boolean
        get direct(): boolean
        get readable(): boolean
        get readOnly(): boolean
        get writable(): boolean
    }
    type AbstractReferenceCountedByteBuf_ = AbstractReferenceCountedByteBuf;
    abstract class HorizontalDirectionalBlock extends Internal.Block {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type HorizontalDirectionalBlock_ = HorizontalDirectionalBlock;
    class StructureStart {
        constructor(arg0: Internal.Structure_, arg1: Internal.ChunkPos_, arg2: number, arg3: Internal.PiecesContainer_)
        getClass(): typeof any;
        canBeReferenced(): boolean;
        isValid(): boolean;
        getPieces(): Internal.List<Internal.StructurePiece>;
        toString(): string;
        notifyAll(): void;
        getReferences(): number;
        notify(): void;
        getBoundingBox(): Internal.BoundingBox;
        wait(arg0: number, arg1: number): void;
        createTag(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.ChunkPos_): Internal.CompoundTag;
        static loadStaticStart(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_, arg2: number): Internal.StructureStart;
        hashCode(): number;
        getChunkPos(): Internal.ChunkPos;
        getStructure(): Internal.Structure;
        wait(): void;
        wait(arg0: number): void;
        placeInChunk(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_): void;
        equals(arg0: any): boolean;
        addReference(): void;
        get class(): typeof any
        get valid(): boolean
        get pieces(): Internal.List<Internal.StructurePiece>
        get references(): number
        get boundingBox(): Internal.BoundingBox
        get chunkPos(): Internal.ChunkPos
        get structure(): Internal.Structure
        static readonly INVALID_START_ID: ("INVALID") & (string);
        static readonly INVALID_START: (Internal.StructureStart) & (Internal.StructureStart);
    }
    type StructureStart_ = StructureStart;
    class ConsoleLine {
        constructor(buf: Internal.FriendlyByteBuf_)
        constructor(console: Internal.ConsoleJS_, timestamp: number, message: string)
        getClass(): typeof any;
        toString(): string;
        withSourceLine(source: string, line: number): this;
        notifyAll(): void;
        getText(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        withExternalFile(path: Internal.Path_): this;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static writeToNet(buf: Internal.FriendlyByteBuf_, line: Internal.ConsoleLine_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get text(): string
        type: Internal.LogType;
        externalFile: Internal.Path;
        readonly console: Internal.ConsoleJS;
        readonly timestamp: number;
        group: string;
        sourceLines: Internal.Collection<Internal.ConsoleLine$SourceLine>;
        static readonly EMPTY_ARRAY: Internal.ConsoleLine[];
        message: string;
        stackTrace: Internal.List<string>;
    }
    type ConsoleLine_ = ConsoleLine;
    interface RecipeFilterParseEvent {
        abstract parse(arg0: Internal.Context_, arg1: Internal.List_<Internal.RecipeFilter>, arg2: Internal.Map_<any, any>): void;
        (arg0: Internal.Context, arg1: Internal.List<Internal.RecipeFilter>, arg2: Internal.Map<any, any>): void;
    }
    type RecipeFilterParseEvent_ = ((arg0: Internal.Context, arg1: Internal.List<Internal.RecipeFilter>, arg2: Internal.Map<any, any>)=> void) | RecipeFilterParseEvent;
    interface Object2LongMap$Entry <K> extends Internal.Map$Entry<K, number> {
        abstract getKey(): K;
        /**
         * @deprecated
        */
        setValue(arg0: number): number;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        setValue(arg0: any): any;
        /**
         * @deprecated
        */
        getValue(): any;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        abstract "setValue(long)"(arg0: number): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        abstract setValue(arg0: number): number;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        "setValue(java.lang.Object)"(arg0: any): any;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        /**
         * @deprecated
        */
        "setValue(java.lang.Long)"(arg0: number): number;
        abstract getLongValue(): number;
        abstract equals(arg0: any): boolean;
        get key(): K
        /**
         * @deprecated
        */
        set value(arg0: number)
        /**
         * @deprecated
        */
        set value(arg0: any)
        /**
         * @deprecated
        */
        get value(): any
        set "value(long)"(arg0: number)
        set value(arg0: number)
        /**
         * @deprecated
        */
        set "value(java.lang.Object)"(arg0: any)
        /**
         * @deprecated
        */
        set "value(java.lang.Long)"(arg0: number)
        get longValue(): number
    }
    type Object2LongMap$Entry_<K> = Object2LongMap$Entry<K>;
    class DepositFilterType extends Internal.Enum<Internal.DepositFilterType> implements Internal.StringRepresentable {
        getClass(): typeof any;
        compareTo(arg0: Internal.DepositFilterType_): number;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        static fromName(arg0: string): Internal.DepositFilterType;
        static valueOf(arg0: string): Internal.DepositFilterType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getDeclaringClass(): typeof Internal.DepositFilterType;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DepositFilterType>>;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        "compareTo(net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterType)"(arg0: Internal.DepositFilterType_): number;
        next(): this;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.DepositFilterType[];
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DepositFilterType
        static readonly INVENTORY: (Internal.DepositFilterType) & (Internal.DepositFilterType);
        static readonly BLOCK: (Internal.DepositFilterType) & (Internal.DepositFilterType);
        static readonly ALLOW: (Internal.DepositFilterType) & (Internal.DepositFilterType);
    }
    type DepositFilterType_ = "block" | "allow" | "inventory" | DepositFilterType;
    class WitherSkeleton extends Internal.AbstractSkeleton {
        constructor(arg0: Internal.EntityType_<Internal.WitherSkeleton>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isShaking(): boolean;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        reassessWeaponGoal(): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        get shaking(): boolean
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type WitherSkeleton_ = WitherSkeleton;
    class ItemFlowParticleType extends Internal.ParticleType<com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData> {
        constructor()
        getDeserializer(): Internal.ParticleOptions$Deserializer<com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData>;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        codec(): Internal.Codec<com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData>;
        getOverrideLimiter(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get deserializer(): Internal.ParticleOptions$Deserializer<com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData>
        get class(): typeof any
        get overrideLimiter(): boolean
    }
    type ItemFlowParticleType_ = ItemFlowParticleType;
    interface Long2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.LongToIntFunction {
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        "put(long,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        "remove(long)"(arg0: number): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Character)"(arg0: number, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2CharFunction;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Long2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2CharFunction<T>;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2CharFunction;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        abstract get(arg0: number): string;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "containsKey(long)"(arg0: number): boolean;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Long2ByteFunction;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        "getOrDefault(long,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: string): void;
        remove(arg0: number): string;
        applyAsInt(arg0: number): number;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2CharFunction;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        apply(arg0: number): string;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2CharFunction<T>;
        clear(): void;
        put(arg0: number, arg1: string): string;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2CharFunction;
        abstract "get(long)"(arg0: number): string;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Long2CharFunction_ = Long2CharFunction;
    class BlastFurnaceMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_, arg3: Internal.ContainerData_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        clearCraftingContent(): void;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        getResultSlotIndex(): number;
        getSize(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        getGridHeight(): number;
        setData(arg0: number, arg1: number): void;
        getLitProgress(): number;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        recipeMatches(arg0: Internal.Recipe_<net.minecraft.world.Container>): boolean;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        handlePlacement(arg0: boolean, arg1: Internal.Recipe_<any>, arg2: Internal.ServerPlayer_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        getGridWidth(): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        getRecipeBookCategories(): Internal.List<Internal.RecipeBookCategories>;
        static getQuickcraftHeader(arg0: number): number;
        getBurnProgress(): number;
        fillCraftSlotsStackedContents(arg0: Internal.StackedContents_): void;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        shouldMoveToInventory(arg0: number): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        getRecipeBookType(): Internal.RecipeBookType;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        isLit(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get resultSlotIndex(): number
        get size(): number
        get gridHeight(): number
        get litProgress(): number
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        get gridWidth(): number
        set carried(arg0: Internal.ItemStack_)
        get recipeBookCategories(): Internal.List<Internal.RecipeBookCategories>
        get burnProgress(): number
        get recipeBookType(): Internal.RecipeBookType
        get stateId(): number
        get lit(): boolean
    }
    type BlastFurnaceMenu_ = BlastFurnaceMenu;
    class RootedDirtBlock extends Internal.Block implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type RootedDirtBlock_ = RootedDirtBlock;
    interface SuggestionProvider <S> {
        abstract getSuggestions(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        (arg0: Internal.CommandContext<S>, arg1: Internal.SuggestionsBuilder): Internal.CompletableFuture_<Internal.Suggestions>;
    }
    type SuggestionProvider_<S> = ((arg0: Internal.CommandContext<S>, arg1: Internal.SuggestionsBuilder)=> Internal.CompletableFuture_<Internal.Suggestions>) | SuggestionProvider<S>;
    interface IEventBusInvokeDispatcher {
        abstract invoke(arg0: Internal.IEventListener_, arg1: net.minecraftforge.eventbus.api.Event_): void;
        (arg0: Internal.IEventListener, arg1: net.minecraftforge.eventbus.api.Event): void;
    }
    type IEventBusInvokeDispatcher_ = ((arg0: Internal.IEventListener, arg1: net.minecraftforge.eventbus.api.Event)=> void) | IEventBusInvokeDispatcher;
    class WorkbenchBlock$WorkbenchModelType extends Internal.Enum<Internal.WorkbenchBlock$WorkbenchModelType> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.WorkbenchBlock$WorkbenchModelType;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        notifyAll(): void;
        static values(): Internal.WorkbenchBlock$WorkbenchModelType[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.WorkbenchBlock$WorkbenchModelType>>;
        compareTo(arg0: Internal.WorkbenchBlock$WorkbenchModelType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        static valueOf(name: string): Internal.WorkbenchBlock$WorkbenchModelType;
        wait(arg0: number): void;
        "compareTo(earth.terrarium.chipped.common.blocks.WorkbenchBlock$WorkbenchModelType)"(arg0: Internal.WorkbenchBlock$WorkbenchModelType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get declaringClass(): typeof Internal.WorkbenchBlock$WorkbenchModelType
        get class(): typeof any
        get serializedName(): string
        static readonly MAIN: (Internal.WorkbenchBlock$WorkbenchModelType) & (Internal.WorkbenchBlock$WorkbenchModelType);
        static readonly SIDE: (Internal.WorkbenchBlock$WorkbenchModelType) & (Internal.WorkbenchBlock$WorkbenchModelType);
    }
    type WorkbenchBlock$WorkbenchModelType_ = "side" | "main" | WorkbenchBlock$WorkbenchModelType;
}
declare namespace it.unimi.dsi.fastutil.longs {
    interface LongPredicate extends Internal.Predicate<number>, Internal.LongPredicate {
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        negate(): Internal.Predicate<any>;
        and(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        /**
         * @deprecated
        */
        "test(java.lang.Long)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        abstract test(arg0: number): boolean;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        "or(java.util.function.LongPredicate)"(arg0: Internal.LongPredicate_): this;
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        "and(java.util.function.LongPredicate)"(arg0: Internal.LongPredicate_): Internal.LongPredicate;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        "or(it.unimi.dsi.fastutil.longs.LongPredicate)"(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        abstract "test(long)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "test(java.lang.Object)"(arg0: any): boolean;
        or(arg0: Internal.LongPredicate_): this;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        "and(it.unimi.dsi.fastutil.longs.LongPredicate)"(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): this;
        and(arg0: Internal.LongPredicate_): Internal.LongPredicate;
    }
    type LongPredicate_ = LongPredicate;
}
declare namespace com.mojang.realmsclient.dto {
    class PlayerInfo extends Internal.ValueObject implements Internal.ReflectionBasedSerialization {
        constructor()
        getClass(): typeof any;
        getOnline(): boolean;
        setAccepted(arg0: boolean): void;
        setOperator(arg0: boolean): void;
        getAccepted(): boolean;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        getUuid(): string;
        wait(arg0: number, arg1: number): void;
        setOnline(arg0: boolean): void;
        hashCode(): number;
        setName(arg0: string): void;
        wait(): void;
        getName(): string;
        setUuid(arg0: string): void;
        wait(arg0: number): void;
        isOperator(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get online(): boolean
        set accepted(arg0: boolean)
        set operator(arg0: boolean)
        get accepted(): boolean
        get uuid(): string
        set online(arg0: boolean)
        set name(arg0: string)
        get name(): string
        set uuid(arg0: string)
        get operator(): boolean
    }
    type PlayerInfo_ = PlayerInfo;
}
declare namespace net.minecraftforge.client.event.sound {
    abstract class SoundEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getEngine(): Internal.SoundEngine;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get engine(): Internal.SoundEngine
    }
    type SoundEvent_ = SoundEvent;
}
